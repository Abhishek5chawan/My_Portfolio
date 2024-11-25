import { IconType } from 'react-icons'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiMongodb, SiPostgresql, SiExpress, SiSass } from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Express', icon: SiExpress },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Sass', icon: SiSass },
]

export default function Skills() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Skills & Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-4 bg-muted rounded-lg">
            <skill.icon className="text-4xl mb-2" />
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

