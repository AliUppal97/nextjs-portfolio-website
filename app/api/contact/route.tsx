import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { createEmailService } from "@/lib/email-service"

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
})

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(ip: string): string {
  return `contact_${ip}`
}

function isRateLimited(ip: string): boolean {
  const key = getRateLimitKey(ip)
  const now = Date.now()
  const limit = rateLimitStore.get(key)

  if (!limit || now > limit.resetTime) {
    // Reset or create new limit
    rateLimitStore.set(key, { count: 1, resetTime: now + 60 * 60 * 1000 }) // 1 hour
    return false
  }

  if (limit.count >= 5) {
    // Max 5 submissions per hour
    return true
  }

  limit.count++
  return false
}

function containsSpam(text: string): boolean {
  const spamKeywords = [
    "viagra",
    "casino",
    "lottery",
    "winner",
    "congratulations",
    "click here",
    "free money",
    "make money fast",
    "work from home",
    "weight loss",
    "crypto",
    "bitcoin",
    "investment opportunity",
  ]

  const lowerText = text.toLowerCase()
  return spamKeywords.some((keyword) => lowerText.includes(keyword))
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"

    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Basic spam detection
    const fullText = `${validatedData.name} ${validatedData.subject} ${validatedData.message}`
    if (containsSpam(fullText)) {
      return NextResponse.json({ error: "Message flagged as spam." }, { status: 400 })
    }

    // Additional spam checks
    if (validatedData.message.includes("http://") || validatedData.message.includes("https://")) {
      // Allow only specific domains or reject all URLs
      const allowedDomains = ["github.com", "linkedin.com", "your-domain.com"]
      const hasDisallowedUrl = !allowedDomains.some((domain) => validatedData.message.includes(domain))

      if (hasDisallowedUrl) {
        return NextResponse.json({ error: "URLs not allowed in messages." }, { status: 400 })
      }
    }

    // In a real application, you would:
    // 1. Send email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the message in a database
    // 3. Send notifications to admin

    // For now, we'll simulate email sending
    const emailData = {
      to: process.env.CONTACT_EMAIL || "muzair21st@gmail.com",
      from: validatedData.email,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Sent from portfolio contact form</small></p>
      `,
    }

    // Send email using configured service
    const emailService = createEmailService()
    await emailService.send(emailData)

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 },
      )
    }

    return NextResponse.json({ error: "Internal server error. Please try again later." }, { status: 500 })
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}
