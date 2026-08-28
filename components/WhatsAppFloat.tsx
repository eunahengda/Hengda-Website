"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60" />
    </motion.a>
  );
}
