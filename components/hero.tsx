"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Image } from "./ui/image"
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

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:gap-x-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 lg:row-start-1 order-2 lg:order-1"
          >
            <div className="max-w-md text-base leading-7 text-muted-foreground lg:max-w-lg">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base font-semibold leading-7 text-primary"
              >
                Software Engineer
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
              >
                Empowering Innovation with Robust Backend Engineering & Intelligent Data Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 text-xl leading-8"
              >
                I'm Muhammad Uzair, a results-driven Software Engineer who transforms complex challenges into scalable solutions. With 3+ years of proven expertise in backend engineering and data analytics, I deliver high-performance applications that drive business growth and exceed expectations.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex items-center gap-x-6"
              >
                <Button asChild size="lg">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/Muhammad Uzair Resume.pdf" target="_blank" download>
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 flex items-center gap-x-6"
              >
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
              </motion.div>
            </div>
          </motion.div>
          
          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1 lg:row-start-1 flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0 -mt-8 lg:mt-0"
          >
            <div className="relative max-w-xs lg:max-w-none">
              {/* Gradient Border Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative p-1 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 dark:from-primary/30 dark:via-primary/20 dark:to-accent/30"
              >
                {/* Animated Gradient Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 opacity-60"
                />
                
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-full bg-background p-2 shadow-2xl">
                  <Image
                    className="aspect-square w-full rounded-full object-cover transition-transform duration-300 hover:scale-105"
                    src="/software-engineer-headshot.png"
                    alt="Muhammad Uzair"
                    width={400}
                    height={400}
                  />
                  
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-3 w-3 rounded-full bg-primary"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-accent/20 dark:bg-accent/30 flex items-center justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-accent"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
