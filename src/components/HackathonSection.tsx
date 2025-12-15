import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './HackathonSection.module.css'

import hackathonPhoto from '../../photo/Рисунок41.jpg'

function HackathonSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className={styles.hackathon}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Выход в финал в международном хакатоне <span className={styles.highlight}>"Код Мира"</span>
          </motion.h2>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Меня пригласили представить Ярославскую область в 2023 году на международном хакатоне "Код Мира" в городе Грозный, 
            где наша команда вышла в финал: мы разрабатывали сервис для фермеров по доставке продуктов
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.macbookWrapper}
          initial={{ opacity: 0, y: 80, rotateX: 15 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 80 }}
        >
          <motion.div 
            className={styles.macbook}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.4 }
            }}
          >
            <div className={styles.screen}>
              <div className={styles.screenFrame}>
                <motion.div 
                  className={styles.screenContent}
                  initial={{ scale: 1.1 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <img src={hackathonPhoto} alt="Хакатон Код Мира" className={styles.photo} />
                  <motion.div 
                    className={styles.screenGlare}
                    animate={{
                      x: ['-100%', '200%'],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                  />
                </motion.div>
                <div className={styles.cameraNotch}>
                  <div className={styles.camera} />
                </div>
              </div>
            </div>
            <div className={styles.base}>
              <div className={styles.keyboard}>
                <div className={styles.keyboardInner} />
              </div>
              <div className={styles.trackpad} />
              <div className={styles.baseEdge} />
            </div>
            <div className={styles.baseFront}>
              <div className={styles.indent} />
            </div>
          </motion.div>

          <motion.div 
            className={styles.shadow}
            initial={{ scaleX: 0.6, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />

          <motion.div 
            className={styles.regionBadge}
            initial={{ opacity: 0, scale: 0.5, x: -50 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <span className={styles.regionIcon}>🌍</span>
            <span className={styles.regionText}>Город Грозный</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.stats}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className={styles.statItem}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <span className={styles.statIcon}>🚀</span>
            <span className={styles.statValue}>2023</span>
            <span className={styles.statLabel}>Год участия</span>
          </motion.div>

          <motion.div 
            className={styles.statItem}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <span className={styles.statIcon}>👥</span>
            <span className={styles.statValue}>81</span>
            <span className={styles.statLabel}>Команд участников</span>
          </motion.div>

          <motion.div 
            className={styles.statItem}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <span className={styles.statIcon}>🌾</span>
            <span className={styles.statValue}>AgriTech</span>
            <span className={styles.statLabel}>Направление проекта</span>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.backgroundEffects}>
        <motion.div 
          className={styles.gradientOrb1}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gradientOrb2}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gradientOrb3}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div 
          className={styles.floatingParticle1}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.floatingParticle2}
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.floatingParticle3}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className={styles.gridPattern} />
        <div className={styles.noiseOverlay} />
      </div>
    </section>
  )
}

export default HackathonSection

