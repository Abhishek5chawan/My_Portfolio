"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
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
    title: 'ByteTweet',
    description: 'A application for twitting',
    deployedUrl: 'https://github.com/Abhishek5chawan/ByteTweet',
    githubUrl: 'https://github.com/Abhishek5chawan/ByteTweet',
    image: '/ByteTweet.png',
    stack: ['Python','Django', 'Mysql', 'Bootstap'],
  },
  {
    title: 'Media Optimization Platform',
    description: 'A application to tranform the given images into social media ready aspect ratios and compress the videos by leveraging cloudinary AI.',
    deployedUrl: 'https://ai-saas-cloudinary.vercel.app/home',
    githubUrl: 'https://github.com/Abhishek5chawan/AI_SaaS_Cloudinary',
    image: '/cloudinary_saas.png',
    stack: ['Next.js', 'TypeScript', 'clerk', 'Cloudinary AI', 'PostgreSQL', 'NeonDB', 'DaisyUI'],
  },
  {
    title: 'VideoHub Service',
    description: 'A complete backend for a video streaming and tweeting platform.',
    deployedUrl: 'https://documenter.getpostman.com/view/38208307/2sAYBUED6o',
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
    title: 'PublishX',
    description: 'A blog app using appwrite backend.',
    deployedUrl: 'https://appwrit-blog.vercel.app/',
    githubUrl: 'https://github.com/Abhishek5chawan/Appwrite-Blog',
    image: '/appwriteBlog.png',
    stack: ['React', 'JavaScript', 'Appwrite', 'redux toolkit', 'react router dom', 'tailwind css'],
  },
  {
    title: 'WhisperLink',
    description: 'MysteryMsg is a platform that allows users to send anonymous messages to one another',
    deployedUrl: 'https://mystery-msg-six.vercel.app/',
    githubUrl: 'https://github.com/Abhishek5chawan/MysteryMsg',
    image: '/MysteryMsg.png',
    stack: ['nextjs', 'TypeScript', 'shadcn', 'Node Mailer','OpenAI GPT-3.2 AI', 'next auth', 'mongoDb'],
  },
]

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="py-20">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl border border-border dark:border-border/50 shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-4">
                  <Button asChild variant="default" className="flex-1">
                    <Link href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <FaExternalLinkAlt className="mr-2" />
                      View Live
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <FaGithub className="mr-2" />
                      Source Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

