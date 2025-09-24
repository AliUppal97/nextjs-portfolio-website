import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { WhatsAppIcon } from "./icons/whatsapp"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/UzairButtar",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/uzair-buttar-230b91156/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:muzair21st@gmail.com",
    icon: Mail,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/353899741868?text=Hello%20Muhammad%20Uzair!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    icon: WhatsAppIcon,
  },
]

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "Resume", href: "/resume" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold">Muhammad Uzair</span>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Software Engineer crafting scalable backend solutions and data-driven applications.
              </p>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold leading-6">{group.title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {group.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Muhammad Uzair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
