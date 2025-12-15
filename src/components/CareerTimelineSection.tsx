import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import styles from './CareerTimelineSection.module.css'

interface TimelineItem {
  dateRange: string
  title: string
  description: string
  highlighted?: boolean
}

interface TimelineSection {
  sectionTitle: string
  sectionSubtitle: string
  items: TimelineItem[]
}

const timelineData: TimelineSection[] = [
  {
    sectionTitle: 'Подробнее о моих первых проектах и работе',
    sectionSubtitle: 'Хронологическая карта проектов с краткими описаниями, первая работа в 2021 году',
    items: [
      {
        dateRange: 'Март 2020 — Октябрь 2020',
        title: 'Продюсирование инфопродуктов',
        description: 'Создавал и продавал digital-курсы, выстраивая полный цикл от трафика до сделки, что дало глубокое понимание аудитории, спроса и продуктовых конверсий.'
      },
      {
        dateRange: 'Декабрь 2020 — Август 2021',
        title: 'Сообщества «Fight Club» и «Successful Traders»',
        description: 'Запустил два онлайн-комьюнити, экспериментируя с контентом, монетизацией и вовлечением, формируя первые навыки продуктового роста.'
      },
      {
        dateRange: 'Ноябрь 2021 — Март 2024',
        title: 'Product Owner — Стартап Студия «Structura»',
        description: 'Управлял командой разработки, создавая продукты от концепции до MVP, развивая проектное мышление, лидерство и способность доводить решения до рынка.',
        highlighted: true
      },
      {
        dateRange: 'Июнь 2022 — Ноябрь 2022',
        title: 'Проект «Умный дом» — грант «Умник»',
        description: 'Разработал концепцию и MVP цифровой платформы для домов, что позволило выиграть конкурс «Интернет вещей» и привлечь 500 тыс. рублей для развития продукта.'
      }
    ]
  },
  {
    sectionTitle: 'Выход на международный уровень и работа в Москве',
    sectionSubtitle: 'Линия, которую я провёл сам — движение от экспериментов к зрелой продуктовой работе',
    items: [
      {
        dateRange: 'Август 2022 — Декабрь 2022',
        title: '«Виртуальные визитки» — грант «Студенческий стартап»',
        description: 'Создал инновационный сервис обмена контактами, прошёл от идеи до прототипа и получил федеральный грант в 1млн. рублей, подтвердив ценность продукта рынку.'
      },
      {
        dateRange: 'Декабрь 2022 — Декабрь 2023',
        title: 'Международные хакатоны и акселераторы',
        description: 'Участвовал в федеральных и международных программах, включая хакатон «Код Мира» в Грозном, где мы разработали сервис для фермеров по быстрой и выгодной доставке продукции без посредников и вошли в топ-11 из 81 команд. Отрабатывал навыки быстрых гипотез, MVP-подхода и продуктовых решений под реальные задачи.',
        highlighted: true
      },
      {
        dateRange: 'Апрель 2024 — Июль 2025',
        title: 'Product/Project Manager — ООО JPPROMO',
        description: 'Руководил разработкой digital-сервисов и командой из 7 специалистов, создавая масштабируемые решения, включая обновлённый аналитический сервис TGScope и платформу визуализации рекламных кампаний JPVision, одновременно выстраивая стратегическое управление продуктом.',
        highlighted: true
      },
      {
        dateRange: 'Август 2025 — Настоящее время',
        title: 'AI-проекты: HireSpark и TruePeople',
        description: 'Разрабатываю собственные AI-инструменты, включая сервис HireSpark для анализа резюме на базе Gamma AI 2.0 и платформу TruePeople, определяющую бот-аудиторию и повышающую качество закупки трафика в Telegram. Соединяю аналитику, технологии и продуктовый подход, создавая решения нового уровня эффективности.'
      }
    ]
  }
]

function CareerTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const isInView = useInView(containerRef, { margin: "-100px" })

  useEffect(() => {
    const updateIsMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768)
      }
    }

    updateIsMobile()
    window.addEventListener('resize', updateIsMobile)

    return () => window.removeEventListener('resize', updateIsMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Плавная трансформация скролла в горизонтальное движение
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const x = useTransform(
    smoothProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "-50%"]
  )
  
  // Для индикатора прогресса
  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"])
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      // При прогрессе > 0.5 показывается вторая секция
      setCurrentSection(latest > 0.5 ? 1 : 0)
    })
    return () => unsubscribe()
  }, [smoothProgress])

  const scrollToSection = (index: number) => {
    if (!containerRef.current) return
    const containerTop = containerRef.current.offsetTop
    const containerHeight = containerRef.current.offsetHeight
    const viewHeight = window.innerHeight
    
    // index 0 -> первая секция (начало скролла)
    // index 1 -> вторая секция (конец скролла)
    const scrollTarget = index === 0 
      ? containerTop + 10 // немного от начала, чтобы активировать sticky
      : containerTop + containerHeight - viewHeight - 10

    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    })
  }

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      <div 
        ref={stickyRef} 
        className={styles.stickyWrapper}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <section className={styles.careerTimeline}>
          <div className={styles.backgroundEffects}>
            <div className={styles.gradientOrb1} />
            <div className={styles.gradientOrb2} />
            <div className={styles.gradientOrb3} />
            <div className={styles.gridPattern} />
          </div>

          <div className={styles.progressIndicator}>
            <div className={styles.progressTrack}>
              <motion.div 
                className={styles.progressBar}
                style={{ width: progressWidth }}
              />
            </div>
            <div className={styles.sectionDots}>
              <button 
                className={`${styles.sectionDot} ${currentSection === 0 ? styles.active : ''}`}
                onClick={() => scrollToSection(0)}
              />
              <button 
                className={`${styles.sectionDot} ${currentSection === 1 ? styles.active : ''}`}
                onClick={() => scrollToSection(1)}
              />
            </div>
          </div>

          <div className={styles.timelineViewport}>
            <motion.div 
              className={styles.timelineTrack}
              style={{ x }}
            >
              {timelineData.map((section, sectionIndex) => (
                <div key={sectionIndex} className={styles.timelineSection}>
                  <motion.div 
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + sectionIndex * 0.3 }}
                  >
                    <h2 className={styles.sectionTitle}>{section.sectionTitle}</h2>
                    <p className={styles.sectionSubtitle}>{section.sectionSubtitle}</p>
                  </motion.div>

                  <div className={styles.cardsRow}>
                    <motion.div 
                      className={styles.timelineLine}
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 + sectionIndex * 0.3 }}
                    />
                    
                    {sectionIndex === 0 && (
                      <motion.div 
                        className={styles.startMarker}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 }}
                      >
                        <span>Start</span>
                      </motion.div>
                    )}

                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className={styles.timelineItemWrapper}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.7 + sectionIndex * 0.3 + itemIndex * 0.1
                        }}
                      >
                        <div className={`${styles.dateLabel} ${item.highlighted ? styles.highlighted : ''}`}>
                          {item.dateRange}
                        </div>
                        
                        <div className={styles.timelineDot} />

                        <motion.div 
                          className={`${styles.timelineCard} ${item.highlighted ? styles.highlightedCard : ''}`}
                          whileHover={{ 
                            y: -8,
                            boxShadow: item.highlighted 
                              ? "0 16px 40px rgba(139, 92, 246, 0.2)"
                              : "0 16px 40px rgba(0, 0, 0, 0.1)"
                          }}
                          transition={{ duration: 0.25 }}
                        >
                          <h3 className={`${styles.cardTitle} ${item.highlighted ? styles.highlightedTitle : ''}`}>
                            {item.title}
                          </h3>
                          <p className={styles.cardDescription}>{item.description}</p>
                        </motion.div>
                      </motion.div>
                    ))}

                    {sectionIndex === 1 && (
                      <motion.div 
                        className={styles.endMarker}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1.8 }}
                      >
                        <span>End?</span>
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className={styles.scrollHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView && isHovering ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <span className={styles.scrollArrows}>↓</span>
            <span className={styles.scrollText}>
              Скролл вниз
            </span>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default CareerTimelineSection