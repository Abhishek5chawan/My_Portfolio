"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import { Mail, Phone, Linkedin, Github, FileText } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    // Initial check
    handleResize()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-200 ${
        isScrolled ? 'shadow-md' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="flex items-center space-x-4 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/profile-picture.jpg"
              alt="Profile Picture"
              width={80}
              height={80}
              className="rounded-full border-2 border-primary"
            />
            {(!isScrolled || !isMobile) && (
              <div>
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Abhishek C
                </h1>
                <p className="text-sm text-muted-foreground">Full Stack Web Developer</p>
              </div>
            )}
          </motion.div>
          {(!isScrolled || !isMobile) && (
            <motion.nav
              className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="" className="text-sm hover:text-primary transition-colors flex items-center space-x-1">
                <Mail size={16} />
                <span>Email abhishekchawan907@gmail.com</span>
              </Link>
              <Link href="" className="text-sm hover:text-primary transition-colors flex items-center space-x-1">
                <Phone size={16} />
                <span>Call (+91) 8951059470</span>
              </Link>
              <Link
                href="www.linkedin.com/in/abhishek5chawan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary transition-colors flex items-center space-x-1"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/Abhishek5chawan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary transition-colors flex items-center space-x-1"
              >
                <Github size={16} />
                <span>GitHub</span>
              </Link>
              <Button asChild variant="outline" size="sm" className="group">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >
                  <FileText size={16} className="group-hover:text-primary transition-colors" />
                  <span>Resume</span>
                </Link>
              </Button>
              <ModeToggle />
            </motion.nav>
          )}
        </div>
      </div>
    </motion.header>
  )
}
