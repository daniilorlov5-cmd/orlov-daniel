import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './TGScopeSection.module.css'

const features = [
  {
    title: 'Сбор данных на Rust',
    description: 'Прогрессивный язык программирования RUST позволяет в 6 раз быстрее (каждые 10 минут) собирать данные со всех Telegram каналов'
  },
  {
    title: '400 000+ каналов',
    description: 'Только реальные каналы с аудиторией выше 100 человек, а также постоянное автоматическое расширение базы'
  },
  {
    title: 'Оптимальный UX',
    description: 'Минимализм, простота, удобство навигации — созданный на основе пользовательских интервью с фокус группами'
  },
  {
    title: 'Индекс Качества Канала',
    description: 'Запатентованная технология ИКК — автоматическая индексация каналов по 8 ключевым метрикам'
  },
  {
    title: 'Уникальные метрики',
    description: 'CPM, CPF по каналам в отдельности, оценка стоимости каналов и другие метрики на которые есть запрос у рынка'
  },
  {
    title: 'Расширенный фильтр',
    description: 'Супер удобный фильтр поиска каналов, позволяющий быстро находить нужные сегменты целевой аудитории'
  }
]

function TGScopeSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
    <section ref={sectionRef} className={styles.tgScope}>
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
            <span className={styles.tgHighlight}>TG</span> SCOPE
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Сервис аналитики Telegram-каналов над которым я работал
          </motion.p>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={styles.screenshotsSection}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a 
              href="https://tgscope.ru/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.screenshotLink}
            >
              <motion.div 
                className={styles.screenshotWrapper}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: -2
                }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.browserFrame}>
                  <div className={styles.browserHeader}>
                    <div className={styles.browserDots}>
                      <span className={styles.dot} style={{ background: '#ff5f57' }}></span>
                      <span className={styles.dot} style={{ background: '#febc2e' }}></span>
                      <span className={styles.dot} style={{ background: '#28c840' }}></span>
                    </div>
                    <div className={styles.browserUrl}>
                      <span>🔒</span> tgscope.ru
                    </div>
                  </div>
                  <div className={styles.screenshotContainer}>
                    <img 
                      src="/presentation/2025-12-15_14-28-12.png" 
                      alt="TG Scope - Главная страница"
                      className={styles.mainScreenshot}
                    />
                    <motion.div 
                      className={styles.screenshotShine}
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>
                <div className={styles.screenshotGlow} />
              </motion.div>
            </a>

            <motion.a
              href="https://tgscope.ru/home"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visitButton}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(33, 150, 243, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.buttonIcon}>🚀</span>
              Перейти на TG Scope
              <motion.span 
                className={styles.buttonArrow}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={styles.cardNumber}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <div className={styles.cardGlow} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.backgroundEffects}>
        <motion.div 
          className={styles.gradientOrb1}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 60, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gradientOrb2}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gradientOrb3}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className={styles.gridPattern} />
        <div className={styles.noiseOverlay} />
      </div>
    </section>
  )
}

export default TGScopeSection
