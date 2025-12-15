import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from './PublicSpeakingSection.module.css'

interface SpeakingCard {
  image: string
  title: string
  description: string
}

const speakingData: SpeakingCard[] = [
  {
    image: '/photo/Рисунок58.jpg',
    title: 'На крупнейших рекламных форумах',
    description: 'Выступал спикером на НРФ, TGMarket и других отраслевых конференциях, делясь опытом работы с продуктами, аналитикой Telegram и построением digital-решений.'
  },
  {
    image: '/photo/Рисунок59.jpg',
    title: 'Продуктовые доклады и трекинг студенческих команд',
    description: 'Проводил доклады о разработке сервисов, работе с гипотезами, метриками, бизнес-моделями и организации командной работы в IT.'
  },
  {
    image: '/photo/Рисунок60.jpg',
    title: 'Инвест-встречи с Яндекс и МТС',
    description: 'Представлял продукты TGScope и JPVision топ-компаниям, демонстрируя ценность решений, экономику, аналитику и потенциал масштабирования.'
  }
]

function PublicSpeakingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={sectionRef} className={styles.publicSpeaking}>
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.noiseOverlay} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.title}>Мои публичные выступления</h2>
          <p className={styles.subtitle}>А также продуктовые доклады и инвест-презентации</p>
        </motion.div>

        <div className={styles.cardsGrid}>
          {speakingData.map((card, index) => (
            <motion.div
              key={index}
              className={styles.cardWrapper}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`${styles.card} ${hoveredIndex === index ? styles.cardHovered : ''}`}>
                <div className={styles.imageContainer}>
                  <motion.div 
                    className={styles.imageWrapper}
                    animate={{
                      scale: hoveredIndex === index ? 1.08 : 1,
                      rotateY: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay} />
                    <div className={styles.imageShine} />
                  </motion.div>
                  
                  <div className={styles.glowEffect} />
                </div>

                <div className={styles.content}>
                  <motion.h3 
                    className={styles.cardTitle}
                    animate={{
                      color: hoveredIndex === index ? '#6366f1' : '#1e293b'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.title}
                  </motion.h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>

                <div className={styles.cardBorder} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.pagination}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {speakingData.map((_, index) => (
            <span 
              key={index} 
              className={`${styles.dot} ${hoveredIndex === index ? styles.activeDot : ''}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PublicSpeakingSection

