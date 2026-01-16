"use client"

import { createContext, useContext, ReactNode } from "react"

interface ContactContextType {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <ContactContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ContactContext.Provider>
  )
}

export function useContact() {
  const context = useContext(ContactContext)
  if (context === undefined) {
    throw new Error("useContact must be used within a ContactProvider")
  }
  return context
}
