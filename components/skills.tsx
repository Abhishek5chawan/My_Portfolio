"use client"

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { IconType } from 'react-icons'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa'
import { SiNextdotjs, SiMongodb, SiPostgresql, SiExpress, SiRedux, SiTypescript, SiPrisma, SiTailwindcss, SiNginx, SiPython, SiDjango, } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { GiIceCube } from 'react-icons/gi'

const skills = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Redux Toolkit', icon: SiRedux },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MongoDB Aggregation', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Express', icon: SiExpress },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'NeonDB', icon: FaDatabase },
  { name: 'NextAuth', icon: TbBrandNextjs },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Nginx', icon: SiNginx },
  { name: 'Coolify', icon: GiIceCube },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
]

export default function Skills() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

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
          hidden: { opacity: 0, y: 20 }
        }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center p-4 sm:p-6 rounded-xl bg-card dark:bg-card/80 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-border"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <skill.icon className="text-3xl sm:text-5xl mb-2 sm:mb-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

