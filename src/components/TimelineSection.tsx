import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './TimelineSection.module.css'

const timelineDates = [
  { month: 'Март', year: '2020' },
  { month: 'Ноябрь', year: '2021' },
  { month: 'Июль', year: '2022' },
  { month: 'Июнь', year: '2023' },
  { month: 'Апрель', year: '2024' },
  { month: 'Ноябрь', year: '2025' },
]

const projects = [
  { name: 'Продюсирование инфопродуктов', color: 'green', startPos: 0, width: 22, row: 0 },
  { name: 'Сервис «Виртуальные визитки»', color: 'lavender', startPos: 25, width: 22, row: 0 },
  { name: 'Разработка CRM JP VISION', color: 'darkBlue', startPos: 68, width: 15, row: 0 },
  { name: 'Сервис анализа резюме', color: 'cyan', startPos: 85, width: 14, row: 0 },
  
  { name: 'Сообщество «Fight Club»', color: 'purple', startPos: 0, width: 20, row: 1 },
  { name: 'Проект «Умный дом»', color: 'gray', startPos: 22, width: 18, row: 1 },
  { name: 'Акселератор «Цифра»', color: 'lavender', startPos: 42, width: 14, row: 1 },
  { name: 'Telegram Ads для «Пятёрочки»', color: 'red', startPos: 70, width: 16, row: 1 },
  
  { name: 'Сообщество «Successful Traders»', color: 'red', startPos: 0, width: 23, row: 2 },
  { name: 'Хакатоны (Сколково, «Код Мира») и другие', color: 'lavender', startPos: 38, width: 26, row: 2 },
  { name: 'Сервис TG SCOPE', color: 'teal', startPos: 66, width: 16, row: 2 },
  { name: 'TruePeople (OREON)', color: 'cyan', startPos: 85, width: 14, row: 2 },
  
  { name: 'Акселератор «Цифра»', color: 'lavender', startPos: 32, width: 14, row: 3 },
  { name: 'Инвест-презентации (Яндекс, МТС)', color: 'red', startPos: 68, width: 18, row: 3 },
  
  { name: 'Управление отделом продаж (РОП)', color: 'gray', startPos: 35, width: 28, row: 4 },
  { name: 'Публичные выступления (НРФ и др.)', color: 'orange', startPos: 66, width: 22, row: 4 },
  
  { name: 'Изучение Вайбкодинга', color: 'cyan', startPos: 78, width: 20, row: 5 },
]

function TimelineSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className={styles.timeline}>
      <div className={styles.decorativeOrb1} />
      <div className={styles.decorativeOrb2} />
      
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>Карта моих проектов и достижений</h2>
          <p className={styles.subtitle}>
            Структурированный обзор того, что я создавал и когда запускал продукты
          </p>
        </motion.div>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineDates}>
            <div className={styles.timelineLine}>
              <motion.div 
                className={styles.timelineLineProgress}
                initial={{ width: '0%' }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              />
            </div>
            
            {timelineDates.map((date, index) => (
              <motion.div 
                key={index}
                className={styles.dateMarker}
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.15,
                  ease: "easeOut"
                }}
              >
                <motion.div 
                  className={styles.dateDot}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.5 + index * 0.15,
                    type: "spring",
                    stiffness: 300
                  }}
                />
                <div className={styles.dateLabel}>
                  <span className={styles.dateMonth}>{date.month}</span>
                  <span className={styles.dateYear}>{date.year}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.projectsGrid}>
            {[0, 1, 2, 3, 4, 5].map(rowIndex => (
              <div key={rowIndex} className={styles.projectRow}>
                {projects
                  .filter(p => p.row === rowIndex)
                  .map((project, index) => (
                    <motion.div
                      key={project.name + index}
                      className={`${styles.projectCard} ${styles[project.color]}`}
                      style={{
                        left: `${project.startPos}%`,
                        width: `${project.width}%`,
                        minWidth: 'fit-content',
                      }}
                      initial={{ 
                        opacity: 0, 
                        x: -50,
                        scale: 0.8 
                      }}
                      animate={isInView ? { 
                        opacity: 1, 
                        x: 0,
                        scale: 1 
                      } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.8 + rowIndex * 0.15 + index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.08,
                        y: -8,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {project.name}
                    </motion.div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection

