import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './SpeakingGrowthSection.module.css'
import img55 from '../assets/photo/Рисунок55.jpg'
import img56 from '../assets/photo/20251128_144829.jpg'
import img57 from '../assets/photo/Рисунок57.jpg'

interface GrowthCard {
  image: string
  caption: string
}

const growthData: GrowthCard[] = [
  {
    image: img55,
    caption: 'Первый микрофон — первое выступление'
  },
  {
    image: img56,
    caption: 'Первый инвестор — точка, с которой начинается обязательство'
  },
  {
    image: img57,
    caption: 'Каждая идея начинается с рамки — внутри неё рождается продукт'
  }
]

function SpeakingGrowthSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className={styles.speakingGrowth}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Мой опыт <span className={styles.highlight}>публичных выступлений</span> рос на
          <br />протяжении всей жизни
        </motion.h2>

        <div className={styles.cardsContainer}>
          {growthData.map((card, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={card.image}
                  alt={card.caption}
                  className={styles.image}
                />
              </div>
              <div className={styles.captionBox}>
                <p className={styles.caption}>{card.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpeakingGrowthSection
