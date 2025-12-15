import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from './ManagementSection.module.css'
import img61 from '../../photo/Рисунок61.jpg'

const managementPoints = [
  "Создаю структуру, карту объектов, логику сценариев, прототипы и формирую чёткое ТЗ для команды;",
  "Обсуждаем с командой ключевые флоу, UX-риски, визуальные решения и быстро выводим понятный прототип;",
  "Провожу груминг, декомпозирую задачи, уточняю крайние сроки и устраняю блокеры;",
  "Ежедневно проверяю состояние задач, качество исполнения и соответствие проектированию;",
  "Запускаю тесты, собираю метрики, выявляю точки роста и корректирую продукт на основе фактов."
]

function CheckIcon({ index, isInView }: { index: number; isInView: boolean }) {
  return (
    <motion.div 
      className={styles.checkWrapper}
      initial={{ scale: 0, rotate: -180 }}
      animate={isInView ? { scale: 1, rotate: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: 0.4 + index * 0.12,
        type: "spring",
        stiffness: 200
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" className={styles.checkIcon}>
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" fill="rgba(139, 92, 246, 0.05)" />
        <motion.path 
          d="M7 12l3 3 7-7" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 + index * 0.12 }}
        />
      </svg>
    </motion.div>
  )
}

function PhoneMockup() {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div 
      ref={ref}
      className={styles.phoneContainer}
      initial={{ opacity: 0, x: -80, rotateY: 25 }}
      animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      
      <div className={styles.phoneShadow} />

      <motion.div 
        className={styles.phoneWrapper}
        animate={{
          rotateY: isHovered ? -8 : 0,
          rotateX: isHovered ? 5 : 0,
          y: isHovered ? -15 : 0
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={styles.phoneFrame}>
          <div className={styles.phoneNotch}>
            <div className={styles.phoneSpeaker} />
            <div className={styles.phoneCamera} />
          </div>
          
          <div className={styles.phoneScreen}>
            <motion.img 
              src={img61} 
              alt="Форум Время цифры 2025"
              className={styles.phoneImage}
              animate={{
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.5 }}
            />
            
          </div>
          
          <div className={styles.phoneButtons}>
            <div className={styles.volumeUp} />
            <div className={styles.volumeDown} />
            <div className={styles.powerButton} />
          </div>
        </div>

      </motion.div>
    </motion.div>
  )
}

function ManagementSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
    <section ref={sectionRef} className={styles.management}>
      <div className={styles.container}>
        <PhoneMockup />

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Мой подход к управлению<br />
            <span className={styles.titleAccent}>командой и разработке продукта</span>
          </motion.h2>

          <div className={styles.pointsList}>
            {managementPoints.map((point, index) => (
              <motion.div 
                key={index}
                className={styles.pointItem}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <CheckIcon index={index} isInView={isInView} />
                <p className={styles.pointText}>{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className={styles.decorativeElements}>
        <div className={styles.decorDot1} />
        <div className={styles.decorDot2} />
      </div>
    </section>
  )
}

export default ManagementSection

