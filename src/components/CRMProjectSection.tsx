import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './CRMProjectSection.module.css'
import img50 from '../assets/photo/Рисунок50.png'
import img51 from '../assets/photo/Рисунок51.png'
import mobileScreens from '../assets/photo/mobile-screens.png'
import img48 from '../assets/photo/Рисунок48.png'
import img52 from '../assets/photo/Рисунок52.png'

interface Screenshot {
  image: string
  label: string
  isMobile?: boolean
  isMain?: boolean
  link?: string
}

const screenshots: Screenshot[] = [
  {
    image: img50,
    label: 'Формирование анимаций',
    link: 'https://jpvision.ru/'
  },
  {
    image: img51,
    label: 'Реализация графиков'
  },
  {
    image: mobileScreens,
    label: 'Прототипирование мобильной версии'
  },
  {
    image: img48,
    label: 'Реализация сбора статистики'
  },
  {
    image: img52,
    label: '',
    isMain: true
  }
]

function ScreenshotCard({ screenshot, index }: { screenshot: Screenshot; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95,
      rotateX: 10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0
    }
  }

  const content = (
    <motion.div
      ref={ref}
      className={`${styles.screenshotCard} ${screenshot.isMobile ? styles.mobileCard : ''} ${screenshot.isMain ? styles.mainCard : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <div className={styles.imageContainer}>
        {screenshot.isMobile ? (
          <div className={styles.phoneFrame}>
            <div className={styles.phoneNotch}></div>
            <div className={styles.phoneScreen}>
              <img 
                src={screenshot.image} 
                alt={screenshot.label}
                className={styles.mobileImage}
              />
            </div>
          </div>
        ) : (
          <>
            <img 
              src={screenshot.image} 
              alt={screenshot.label}
              className={styles.screenshotImage}
            />
            <motion.div 
              className={styles.imageShine}
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.6 }}
            />
          </>
        )}
        <div className={styles.imageGlow} />
      </div>
      {screenshot.label && (
        <motion.div 
          className={styles.labelContainer}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.3 }}
        >
          <span className={styles.label}>{screenshot.label}</span>
        </motion.div>
      )}
    </motion.div>
  )

  if (screenshot.link) {
    return (
      <a href={screenshot.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
        {content}
      </a>
    )
  }

  return content
}

function CRMProjectSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  const leftScreenshots = screenshots.filter(s => !s.isMain)
  const mainScreenshot = screenshots.find(s => s.isMain)

  return (
    <section ref={sectionRef} className={styles.crmProject}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            CRM для компании JP PROMO
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Проект под который я подобрал команду и разработал его с нуля
          </motion.p>
        </motion.div>

        <div className={styles.screenshotsLayout}>
          <div className={styles.leftColumn}>
            <div className={styles.topRow}>
              {leftScreenshots.slice(0, 2).map((screenshot, index) => (
                <ScreenshotCard key={index} screenshot={screenshot} index={index} />
              ))}
            </div>
            <div className={styles.bottomRow}>
              {leftScreenshots.slice(2, 4).map((screenshot, index) => (
                <ScreenshotCard key={index + 2} screenshot={screenshot} index={index + 2} />
              ))}
            </div>
          </div>
          <div className={styles.rightColumn}>
            {mainScreenshot && (
              <ScreenshotCard screenshot={mainScreenshot} index={4} />
            )}
            <motion.a
              href="https://jpvision.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mainButton}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Перейти на сайт
            </motion.a>
          </div>
        </div>
      </div>

      <div className={styles.backgroundEffects}>
        <motion.div 
          className={styles.gradientOrb1}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gradientOrb2}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gridPattern}
          animate={{
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  )
}

export default CRMProjectSection

