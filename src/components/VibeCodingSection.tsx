import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './VibeCodingSection.module.css'
import demoImage from '../assets/demo46.png'

const techStack = [
  'Next.js',
  'TypeScript', 
  'Zustand',
  'Postgres',
  'Python FastAPI',
  'Celery',
  'Docker'
]

function FloatingParticle({ delay, duration, x, y }: { delay: number; duration: number; x: string; y: string }) {
  return (
    <motion.div
      className={styles.particle}
      style={{ left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

function VibeCodingSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
    <section ref={sectionRef} className={styles.vibeCoding}>
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
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Выпускник курса VibeCoding: <span className={styles.highlight}>MVP за неделю</span>
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Самостоятельно собираю и проверяю гипотезы от идеи до демо, используя MCP инструменты
          </motion.p>
        </motion.div>

        <div className={styles.contentGrid}>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className={styles.cardGlow}
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className={styles.cardContent}>
              <motion.div
                className={styles.infoBlock}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className={styles.infoLabel}>Суть:</span>
                <p className={styles.infoText}>
                  Разработал MVP HireSpark — AI-платформу для подбора команд. 70% работы — 
                  практическая реализация: анализ резюме, оценка совместимости, формирование 
                  проектных команд и тестирование гипотез на реальных HR-кейсах.
                </p>
              </motion.div>

              <motion.div
                className={styles.techBlock}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <span className={styles.techLabel}>Стек:</span>
                <div className={styles.techTags}>
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className={styles.techTag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.08 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                        boxShadow: "0 8px 25px rgba(255, 107, 53, 0.35)"
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div 
              className={styles.cornerAccent}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
            />
            <motion.div 
              className={styles.cornerAccent2}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1, type: "spring" }}
            />
          </motion.div>

          <motion.div
            className={styles.demoSection}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className={styles.demoWrapper}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={styles.demoGlow}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className={styles.browserFrame}>
                <div className={styles.browserHeader}>
                  <div className={styles.browserDots}>
                    <span className={styles.dot} style={{ background: '#ff5f57' }} />
                    <span className={styles.dot} style={{ background: '#febc2e' }} />
                    <span className={styles.dot} style={{ background: '#28c840' }} />
                  </div>
                  <div className={styles.browserUrl}>
                    <span className={styles.urlIcon}>🔒</span>
                    hirespark.app
                  </div>
                </div>
                <div className={styles.browserContent}>
                  <img 
                    src={demoImage} 
                    alt="HireSpark Demo" 
                    className={styles.demoImage}
                  />
                  <motion.div 
                    className={styles.imageOverlay}
                    animate={{
                      background: [
                        "linear-gradient(45deg, transparent 0%, transparent 100%)",
                        "linear-gradient(45deg, rgba(255,107,53,0.1) 0%, transparent 50%, rgba(139,92,246,0.1) 100%)",
                        "linear-gradient(45deg, transparent 0%, transparent 100%)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>

              </motion.div>

            <motion.div
              className={styles.mcpBadge}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className={styles.mcpIcon}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⚙️
              </motion.span>
              <span className={styles.mcpText}>Powered by MCP Tools</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className={styles.backgroundEffects}>
        <motion.div 
          className={styles.gradientOrb1}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gradientOrb2}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.25, 0.1],
            x: [0, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gradientOrb3}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <FloatingParticle delay={0} duration={4} x="10%" y="20%" />
        <FloatingParticle delay={0.5} duration={5} x="85%" y="15%" />
        <FloatingParticle delay={1} duration={4.5} x="20%" y="70%" />
        <FloatingParticle delay={1.5} duration={5.5} x="75%" y="80%" />
        <FloatingParticle delay={2} duration={4} x="50%" y="30%" />
        <FloatingParticle delay={2.5} duration={5} x="90%" y="50%" />
        
        <div className={styles.gridPattern} />
        <div className={styles.noiseOverlay} />
      </div>
    </section>
  )
}

export default VibeCodingSection

