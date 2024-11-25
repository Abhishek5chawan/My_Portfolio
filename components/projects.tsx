import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

const projects = [
  {
    title: 'StreamTube',
    description: 'A complete backend for a video streaming and tweeting platform.',
    deployedUrl: 'https://mega-backend-1aqtw25uz-abhishek-cs-projects.vercel.app/?vercelToolbarCode=1pb5RtyaCFc2ME3',
    githubUrl: 'https://github.com/Abhishek5chawan/Mega-Backend',
    image: '/StreamTube.png',
    stack: ['Next.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Amazon Clone',
    description: 'Amazon Clone using basic html, css and javascript.',
    deployedUrl: 'https://amazon-gamma-sepia.vercel.app/',
    githubUrl: 'https://github.com/Abhishek5chawan/Amazon',
    image: '/amazon.png',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Appwrite Blog',
    description: 'A blog app using appwrite backend.',
    deployedUrl: 'https://appwrit-blog.vercel.app/',
    githubUrl: 'https://github.com/Abhishek5chawan/Appwrite-Blog',
    image: '/appwriteBlog.png',
    stack: ['React', 'Appwrite', 'tailwind css','react-router-dom'],
  },
  {
    title: 'MysteryMsg',
    description: 'MysteryMsg is a platform that allows users to send anonymous messages to one another',
    deployedUrl: 'https://github.com/Abhishek5chawan/MysteryMsg',
    githubUrl: 'https://github.com/Abhishek5chawan/MysteryMsg',
    image: '/MysteryMsg.png',
    stack: ['nextjs', 'shadcn', 'resend email','HuggingFace GPT-3 AI', 'next auth', 'mongoDb'],
  },
  
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild>
                <Link href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                  View Live
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="mr-2" />
                  Source Code
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

