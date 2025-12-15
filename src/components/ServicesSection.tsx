import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './ServicesSection.module.css'

const servicesData = [
  {
    title: 'Создание продукта с нуля\n(от идеи до MVP)',
    items: [
      'Проводится диагностика проекта',
      'Формируются продуктовые гипотезы',
      'Создаётся структура продукта и логика решения',
      'Прорабатывается дизайн, CJM и первые пользовательские сценарии',
      'Запускается проверка гипотез и сбор обратной связи',
      'MVP готовится к запуску и передаётся команде разработки'
    ]
  },
  {
    title: 'Продуктовая аналитика и\nрост (PLG + система метрик)',
    items: [
      'Проводится аудит продуктовых и пользовательских данных',
      'Формируются метрики эффективности (LTV / CAC)',
      'Собираются инсайты на основе поведения пользователей',
      'Строится дорожная карта улучшений и экспериментов',
      'Создаётся система принятия решений на основе данных'
    ]
  },
  {
    title: 'Управление командами и\nпроцессами',
    items: [
      'Аудит разработки и коммуникаций',
      'Определение ролей и зон ответственности',
      'Настройка процессов: дейлики, планирование, декомпозиция',
      'Контроль задач и приоритетов',
      'Прозрачная отчётность',
      'Синхронизация дизайна, продукта и разработки'
    ]
  },
  {
    title: 'Внедрение AI, агентов\nи автоматизаций',
    items: [
      'Аудит процессов и поиск точек автоматизации',
      'Подбор сценариев применения AI под задачи бизнеса',
      'Проектирование архитектуры решения',
      'Создание и проверка прототипа',
      'Внедрение в рабочие процессы',
      'Оценка эффективности от внедрения AI-инструментов'
    ]
  }
]

function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className={styles.services}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Мои услуги
        </motion.h2>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Помогаю создавать и усиливать digital-продукты: от идеи и проектирования до AI-автоматизаций и роста.
        </motion.p>

        <div className={styles.cardsGrid}>
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 25px 50px rgba(139, 92, 246, 0.15), 0 10px 25px rgba(0, 0, 0, 0.08)',
                transition: { duration: 0.3 }
              }}
            >
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <ul className={styles.cardList}>
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={styles.cardItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.backgroundEffects}>
        <motion.div 
          className={styles.gradientOrb1}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gradientOrb2}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className={styles.noiseOverlay} />
      </div>
    </section>
  )
}

export default ServicesSection

