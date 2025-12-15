import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './ProjectsSection.module.css'
import img63 from '../assets/photo/Рисунок63.png'
import img64 from '../assets/photo/Рисунок64.png'
import img65 from '../assets/photo/Рисунок65.png'
import img66 from '../assets/photo/Рисунок66.png'

const projects = [
  {
    image: img63,
    effect: 'tilt',
    isNDA: false
  },
  {
    image: img64,
    effect: 'perspective',
    isNDA: false
  },
  {
    image: img65,
    effect: 'glow',
    isNDA: true
  },
  {
    image: img66,
    effect: 'float',
    isNDA: true
  }
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isTopRow = index < 2

  const getEffectClass = () => {
    switch (project.effect) {
      case 'tilt': return styles.effectTilt
      case 'perspective': return styles.effectPerspective
      case 'glow': return styles.effectGlow
      case 'float': return styles.effectFloat
      default: return ''
    }
  }

  const getInitialAnimation = () => {
    switch (project.effect) {
      case 'tilt':
        return { opacity: 0, y: 60, rotateX: 15 }
      case 'perspective':
        return { opacity: 0, x: -80, rotateY: -25 }
      case 'glow':
        return { opacity: 0, scale: 0.85 }
      case 'float':
        return { opacity: 0, y: 80, rotate: -5 }
      default:
        return { opacity: 0, y: 40 }
    }
  }

  const getAnimateAnimation = () => {
    switch (project.effect) {
      case 'tilt':
        return { opacity: 1, y: 0, rotateX: 0 }
      case 'perspective':
        return { opacity: 1, x: 0, rotateY: 0 }
      case 'glow':
        return { opacity: 1, scale: 1 }
      case 'float':
        return { opacity: 1, y: 0, rotate: 0 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={`${styles.projectCard} ${getEffectClass()} ${isTopRow ? styles.topRow : styles.bottomRow}`}
      initial={getInitialAnimation()}
      animate={isInView ? getAnimateAnimation() : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <div className={styles.imageWrapper}>
        <img 
          src={project.image} 
          alt={`Проект ${index + 1}`}
          className={`${styles.projectImage} ${project.isNDA ? styles.blurred : ''}`}
        />
        <div className={styles.imageOverlay} />
        {project.isNDA && (
          <motion.div 
            className={styles.ndaBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
          >
            <svg viewBox="0 0 24 24" fill="none" className={styles.lockIcon}>
              <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 11V7a4 4 0 118 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>NDA</span>
          </motion.div>
        )}
        {project.effect === 'glow' && !project.isNDA && (
          <motion.div 
            className={styles.glowEffect}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        {project.effect === 'perspective' && (
          <motion.div 
            className={styles.perspectiveShine}
            animate={{
              x: ["-100%", "200%"]
            }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
          />
        )}
      </div>
    </motion.div>
  )
}

function ProjectsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
    <section ref={sectionRef} className={styles.projects}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>
            Реализовал более 50 проектирований digital-продуктов
          </h2>
          <p className={styles.subtitle}>
            Каждый проект имел уникальную структуру и подход
          </p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      <div className={styles.decorativeElements}>
        <motion.div 
          className={styles.decorBlob1}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className={styles.decorBlob2}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  )
}

export default ProjectsSection

