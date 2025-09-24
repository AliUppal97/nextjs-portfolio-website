import { AppLayout } from "@/components/app-layout"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Clock } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Muhammad Uzair",
  description: "Get in touch to discuss your next project or collaboration opportunity.",
  openGraph: {
    title: "Contact | Muhammad Uzair",
    description: "Get in touch to discuss your next project or collaboration opportunity.",
    type: "website",
  },
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "muzair21st@gmail.com",
    description: "Best way to reach me",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+353 89 9741868",
    description: "Quick chat and instant response",
    href: "https://wa.me/353899741868?text=Hello%20Muhammad%20Uzair!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dublin, Ireland",
    description: "Available for remote work",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    description: "Usually much faster",
  },
]

export default function ContactPage() {
  return (
    <AppLayout>
      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Let's Work Together
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring
              your ideas to life.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Multiple ways to get in touch</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.label}</h3>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What I Can Help With</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                      Frontend development with React, Next.js, and TypeScript
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                      MEAN stack development and database design with MySQL
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                      Data analytics and visualization with R Studio, Tableau, and Power BI
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                      CRM and ERP platform development for enterprise solutions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                      Payment integration and cloud services (Stripe, AWS S3, Mailgun)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                      Machine learning and data warehousing solutions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
