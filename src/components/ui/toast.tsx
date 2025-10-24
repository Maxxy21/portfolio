"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, AlertCircle, X } from "lucide-react"
import { useEffect } from "react"

export interface ToastProps {
  message: string
  type: "success" | "error"
  onClose: () => void
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  const Icon = type === "success" ? CheckCircle : AlertCircle
  const bgColor = type === "success"
    ? "bg-green-500/90 dark:bg-green-600/90"
    : "bg-red-500/90 dark:bg-red-600/90"

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
      className={`fixed top-4 right-4 z-50 ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 max-w-md`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 hover:opacity-70 transition-opacity"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

export function ToastContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-0 right-0 z-50 p-4">
      <AnimatePresence>
        {children}
      </AnimatePresence>
    </div>
  )
}
