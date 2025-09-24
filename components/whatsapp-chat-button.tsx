"use client"

import { motion } from "framer-motion"
import { WhatsAppIcon } from "./icons/whatsapp"

interface WhatsAppChatButtonProps {
  className?: string
}

export function WhatsAppChatButton({ className = "" }: WhatsAppChatButtonProps) {
  const whatsappUrl = "https://wa.me/353899741868?text=Hello%20Muhammad%20Uzair!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className={`fixed bottom-6 right-6 z-50 ${className}`}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8 text-white" />
        
        {/* Pulse animation */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-[#25D366]"
        />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 hidden group-hover:block">
          <div className="rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-lg">
            Chat on WhatsApp
            <div className="absolute left-full top-1/2 h-0 w-0 -translate-y-1/2 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
          </div>
        </div>
      </motion.a>
    </motion.div>
  )
}
