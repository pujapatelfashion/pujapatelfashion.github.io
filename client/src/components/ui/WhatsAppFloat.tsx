import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/918595100460"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      <div className="hidden md:flex bg-white px-4 py-2 rounded-full shadow-lg border border-green-100 items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity -mr-4 pr-10">
        <span className="text-sm font-medium text-green-800">Chat with us</span>
      </div>
      <div className="h-14 w-14 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center text-white relative">
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>
        <Phone className="h-7 w-7 fill-white" />
      </div>
    </motion.a>
  );
}
