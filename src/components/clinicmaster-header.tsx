"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ClinicMasterHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-3">
            <img
              src="/images/dr_soma_logo_small.png"
              alt="Dr. Soma Clinical Aesthetics Logo"
              className="w-18 h-24"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-[80px] font-bold">
            <a href="#services" className="text-gray-600 hover:text-primary transition">
             Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary transition">
              About
            </a>
            <a href="#faq" className="text-gray-600 hover:text-primary transition">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition">
              Blog
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-white">Book Consultation</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <a href="#services" className="block text-gray-600 hover:text-primary">
              Services
            </a>
            <a href="#about" className="block text-gray-600 hover:text-primary">
              About
            </a>
            <a href="#faq" className="block text-gray-600 hover:text-primary">
              FAQ
            </a>
            <a href="#contact" className="block text-gray-600 hover:text-primary">
              Contact
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">Book Consultation</Button>
          </nav>
        )}
      </div>
    </header>
  )
}
