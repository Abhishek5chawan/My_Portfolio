import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/profile-picture.jpg"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">Full Stack Web Developer</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <Link href="abhishekchawan907@gmail.com" className="text-sm hover:underline">
            ✉ abhishekchawan907@gmail.com
          </Link>
          <Link href="" className="text-sm hover:underline">
            ☎ (+91) 8951059470
          </Link>
          <Link href="https://www.linkedin.com/in/abhishek-c-450a81300/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
          LinkedIn
          </Link>
          <Link href="https://github.com/Abhishek5chawan" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
            GitHub
          </Link>
          <Button asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

