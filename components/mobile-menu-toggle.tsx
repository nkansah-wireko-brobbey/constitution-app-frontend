'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      aria-controls="mobile-menu"
      aria-expanded={isOpen}
      onClick={() => {
        setIsOpen(!isOpen)
        const mobileMenu = document.getElementById('mobile-menu')
        if (mobileMenu) {
          mobileMenu.classList.toggle('hidden')
        }
      }}
    >
      <span className="sr-only">Open main menu</span>
      {isOpen ? (
        <X className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Menu className="block h-6 w-6" aria-hidden="true" />
      )}
    </button>
  )
}

