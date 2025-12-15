import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import styles from './StatsSection.module.css'
import img69 from '../../photo/Рисунок69.jpg'

interface StatCardProps {
  number: string
  title: string
  subtitle: string
  delay: number
}

function AnimatedNumber({ value, inView }: { value: number; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    
    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [value, inView])

  return <span>{count}+</span>
}

function StatCard({ number, title, subtitle, delay }: StatCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const numericValue = parseInt(number)

  return (
    <motion.div
      ref={ref}
      className={styles.statCard}
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)",
        transition: { duration: 0.2 }
      }}
    >
      <motion.div 
        className={styles.statNumber}
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
      >
        <AnimatedNumber value={numericValue} inView={isInView} />
      </motion.div>
      <p className={styles.statTitle}>{title}</p>
      <p className={styles.statSubtitle}>{subtitle}</p>
    </motion.div>
  )
}

function StatsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const stats = [
    {
      number: "12",
      title: "Запущенных продуктов и сервисов (от идеи до MVP)",
      subtitle: "«Умный дом», «Виртуальные визитки», TGScope, CRM JPVision, HireSpark, TruePeople и др."
    },
    {
      number: "5",
      title: "Лет опыта в продуктовой разработке",
      subtitle: "с 2020 года: инфопродукты → Structura → JPPROMO → AI-проекты"
    },
    {
      number: "30",
      title: "Специалистов работали со мной в командах разработки",
      subtitle: "frontend, backend, data, design, sales, аналитики и др."
    },
    {
      number: "50",
      title: "Проектирований, фич и продуктовых решений",
      subtitle: "CJM, флоу, архитектуры, сценарии, прототипы"
    }
  ]

  return (
    <section ref={sectionRef} className={styles.stats}>
      <div className={styles.container}>
        <motion.div 
          className={styles.photoWrapper}
          initial={{ opacity: 0, x: -80, rotateY: -15 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.photoContainer}>
            <motion.div 
              className={styles.photoBorder}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.img 
              src={img69} 
              alt="Даниил Орлов на TG Market Conf" 
              className={styles.photo}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className={styles.photoOverlay}
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className={styles.glowEffect}
              animate={{ 
                boxShadow: [
                  "0 0 30px rgba(139, 92, 246, 0.3)",
                  "0 0 60px rgba(139, 92, 246, 0.5)",
                  "0 0 30px rgba(139, 92, 246, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className={styles.floatingElements}>
            <motion.div 
              className={styles.floatingCircle}
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className={styles.floatingSquare}
              animate={{ 
                y: [0, 15, 0],
                rotate: [45, 90, 45]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              title={stat.title}
              subtitle={stat.subtitle}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

