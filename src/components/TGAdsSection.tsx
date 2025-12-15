import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './TGAdsSection.module.css'

const stats = [
  {
    value: '194 ₽',
    description: 'Стоимость каждого привлечённого подписчика в бота',
    color: '#5c6bc0'
  },
  {
    value: '8 673 693',
    description: 'Общий рекламный охват, которого получилось достичь',
    color: '#26a69a'
  },
  {
    value: '41,18% ERR',
    description: 'Высокий средний уровень вовлечённости',
    color: '#5c6bc0'
  },
  {
    value: '1 800 000 ₽',
    description: 'Общая стоимость рекламной кампании',
    color: '#26a69a'
  }
]

function TGAdsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
    <section ref={sectionRef} className={styles.tgAds}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            className={styles.leftSection}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Реализовал рекламный бюджет в TG ADS для <span className={styles.highlightRed}>Пятёрочки</span>
            </motion.h2>
            
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              В рамках кампании мы с JP PROMO охватили широкую целевую аудиторию 
              по всей России, обеспечив стабильные метрики вовлечённости и 
              высокое качество регистраций в бота.
            </motion.p>

            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={styles.statCard}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={styles.statValueRow}>
                    <span className={styles.statValue} style={{ color: stat.color }}>{stat.value}</span>
                    <span className={styles.ndaLabel}>NDA</span>
                  </div>
                  <span className={styles.statDescription}>— {stat.description}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.rightSection}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.phoneContainer}>
              <div className={styles.phoneGlowGreen} />
              <div className={styles.phoneGlowBlack} />
              
              <motion.div 
                className={styles.phoneWrapper}
                animate={{
                  y: [0, -15, 0],
                  rotateZ: [0, 1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="/photo/Рисунок45.jpg" 
                  alt="TG Ads Campaign"
                  className={styles.phoneImage}
                />
                
                <motion.div 
                  className={styles.shine}
                  animate={{
                    x: ['-150%', '250%']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              <motion.div 
                className={styles.particlesContainer}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={styles.particle}
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.random() > 0.5 ? 15 : -15, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.backgroundEffects}>
        <motion.div 
          className={styles.gradientOrb1}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gradientOrb2}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className={styles.gridPattern} />
        <div className={styles.noiseOverlay} />
      </div>
    </section>
  )
}

export default TGAdsSection

