// Email service abstraction layer
// This allows easy switching between different email providers

interface EmailData {
  to: string
  from: string
  subject: string
  html: string
  text?: string
}

interface EmailService {
  send(data: EmailData): Promise<void>
}

// Example implementation for SendGrid
class SendGridService implements EmailService {
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async send(data: EmailData): Promise<void> {
    // Implementation would use SendGrid API
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(this.apiKey)
    // await sgMail.send(data)
    console.log("SendGrid email would be sent:", data)
  }
}

// Implementation for Resend
class ResendService implements EmailService {
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async send(data: EmailData): Promise<void> {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact Form <noreply@yourdomain.com>',
          to: [data.to],
          subject: data.subject,
          html: data.html,
          reply_to: data.from,
        }),
      })

      if (!response.ok) {
        const error = await response.text()
        throw new Error(`Resend API error: ${error}`)
      }

      const result = await response.json()
      console.log('✅ Email sent successfully:', result.id)
    } catch (error) {
      console.error('❌ Failed to send email:', error)
      throw error
    }
  }
}

// Factory function to create email service based on environment
export function createEmailService(): EmailService {
  const provider = process.env.EMAIL_PROVIDER || "console"

  switch (provider) {
    case "sendgrid":
      return new SendGridService(process.env.SENDGRID_API_KEY!)
    case "resend":
      return new ResendService(process.env.RESEND_API_KEY!)
    default:
      // Console service for development
      return {
        async send(data: EmailData) {
          console.log("📧 Email would be sent:", {
            to: data.to,
            from: data.from,
            subject: data.subject,
            preview: data.html.substring(0, 100) + "...",
          })
        },
      }
  }
}
