import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './TeamValueSection.module.css'

function TeamValueSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className={styles.teamValue}>
      <div className={styles.container}>
        <motion.div 
          className={styles.mainCard}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className={styles.mainTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className={styles.highlight}>Меня ценят работодатели</span> прежде всего за умение
            объединять команду вокруг цели и обеспечивать
            прозрачный, предсказуемый процесс.
          </motion.h2>

          <div className={styles.photosRow}>
            <motion.div 
              className={styles.photoFrame}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                rotateX: -2,
                transition: { duration: 0.4 }
              }}
            >
              <div className={styles.photoInner}>
                <img 
                  src="/photo/Рисунок38.jpg" 
                  alt="Команда за работой"
                  className={styles.photo}
                />
                <motion.div 
                  className={styles.photoShine}
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            <motion.div 
              className={styles.photoFrame}
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ 
                scale: 1.03,
                rotateY: -5,
                rotateX: -2,
                transition: { duration: 0.4 }
              }}
            >
              <div className={styles.photoInner}>
                <img 
                  src="/photo/Рисунок39.jpg" 
                  alt="С коллегой на мероприятии"
                  className={styles.photo}
                />
                <motion.div 
                  className={styles.photoShine}
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 6,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>

          <motion.p 
            className={styles.teamText}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <span className={styles.textHighlight}>А команда уважает</span> за честность, поддержку и умение держать баланс
            между делом и человеческим отношением.
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.sideCard}
          initial={{ opacity: 0, x: 80, rotateY: -10 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          whileHover={{ 
            scale: 1.02,
            rotateY: 3,
            transition: { duration: 0.4 }
          }}
        >
          <div className={styles.sidePhotoWrapper}>
            <img 
              src="/photo/Рисунок40.png" 
              alt="С коллегой на конференции TGScope"
              className={styles.sidePhoto}
            />
            <motion.div 
              className={styles.sidePhotoShine}
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 6,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>

      <div className={styles.backgroundEffects}>
        <motion.div 
          className={styles.gradientOrb1}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 50, 0],
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
        <motion.div 
          className={styles.gradientOrb3}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className={styles.floatingShape1}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className={styles.floatingShape2}
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.floatingShape3}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className={styles.gridPattern} />
        <div className={styles.noiseOverlay} />
      </div>
    </section>
  )
}

export default TeamValueSection

