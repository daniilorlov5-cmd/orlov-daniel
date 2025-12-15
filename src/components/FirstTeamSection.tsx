import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './FirstTeamSection.module.css'

import teamPhoto1 from '../assets/photo/Рисунок42.jpg'
import teamPhoto2 from '../assets/photo/Рисунок43.jpg'
import teamPhoto3 from '../assets/photo/Рисунок44.jpg'

function FirstTeamSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className={styles.firstTeam}>
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
            Первая команда под моим руководством <span className={styles.years}>2021-2024гг.</span>
          </motion.h2>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Кросс-функциональная команда из 5-7 человек в Стартап Студии "Structura"
          </motion.p>
        </motion.div>

        <div className={styles.photoGrid}>
          <motion.div 
            className={styles.leftColumn}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <motion.div 
              className={styles.photoCard}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 5,
                boxShadow: '0 30px 80px rgba(59, 130, 246, 0.35)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={styles.photoWrapper}>
                <img src={teamPhoto1} alt="Команда Structura" className={styles.photo} />
                <motion.div 
                  className={styles.photoOverlay}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              <motion.div 
                className={styles.cardGlow}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.div 
              className={styles.photoCard}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: -5,
                boxShadow: '0 30px 80px rgba(16, 185, 129, 0.35)'
              }}
            >
              <div className={styles.photoWrapper}>
                <img src={teamPhoto2} alt="Код Мира" className={styles.photo} />
                <motion.div 
                  className={styles.photoOverlay}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              <motion.div 
                className={`${styles.cardGlow} ${styles.cardGlowGreen}`}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.rightColumn}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <motion.div 
              className={`${styles.photoCard} ${styles.mainPhoto}`}
              whileHover={{ 
                scale: 1.02, 
                rotateX: 2,
                boxShadow: '0 50px 120px rgba(139, 92, 246, 0.4)'
              }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
            >
              <div className={styles.photoWrapper}>
                <img src={teamPhoto3} alt="Команда на мероприятии" className={styles.photo} />
                <motion.div 
                  className={styles.photoOverlay}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div 
                  className={styles.floatingBadge}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className={styles.badgeIcon}>🏆</span>
                  <span className={styles.badgeText}>Structura</span>
                </motion.div>
              </div>
              <motion.div 
                className={`${styles.cardGlow} ${styles.cardGlowPurple}`}
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.03, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.decorativeElements}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div 
            className={styles.floatingCircle1}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className={styles.floatingCircle2}
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className={styles.floatingCircle3}
            animate={{
              y: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      <div className={styles.backgroundEffects}>
        <motion.div 
          className={styles.gradientOrb1}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gradientOrb2}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.25, 0.1],
            y: [0, -40, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gradientOrb3}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className={styles.gridPattern} />
        <div className={styles.noiseOverlay} />
      </div>
    </section>
  )
}

export default FirstTeamSection

