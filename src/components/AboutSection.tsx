import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './AboutSection.module.css'

interface SkillItemProps {
  text: string
  delay: number
  isHighlighted?: boolean
}

function SkillItem({ text, delay, isHighlighted }: SkillItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className={`${styles.skillItem} ${isHighlighted ? styles.highlighted : ''}`}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div 
        className={styles.checkIcon}
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.4, delay: delay + 0.1, type: "spring", stiffness: 200 }}
      >
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
          <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <p className={styles.skillText}>{text}</p>
    </motion.div>
  )
}

function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const skills = [
    {
      text: "Управление продуктом (full cycle): Product Discovery / Delivery; Agile / Scrum / Kanban;",
      isHighlighted: true
    },
    {
      text: "Продуктовая аналитика (SQL, Power BI, TGStat, TelegramAds);",
      isHighlighted: false
    },
    {
      text: "Разработка бизнес-моделей (P&L, Юнит-экономика), Проведение интервью, CJM, wireframes;",
      isHighlighted: false
    },
    {
      text: "Формирование команды (найм, доукомплектовка), управление продажами и воронками;",
      isHighlighted: false
    },
    {
      text: "Постановка ТЗ и работа с разработчиками и дизайнерами, прототипирование; Go-to-market и монетизация.",
      isHighlighted: false
    }
  ]

  const aboutParagraphs = [
    "Product Manager с опытом управления полным циклом digital-продуктов: от идеи и проектирования до вывода на рынок и масштабирования.",
    "Руководил кросс-функциональными командами до 7 человек (Frontend, Backend, UX/UI), проводил пользовательские интервью, создавал CJM, wireframes, бизнес-модели и unit-экономику. Работал как владелец продукта: выстраивал процессы, принимал ключевые решения и отвечал за результат.",
    "Победитель и призёр федеральных и международных акселераторов и хакатонов (Сколково, «Цифра», «Код Мира»).",
    "Обладатель грантов «Студенческий стартап» (1 млн ₽) и «Умник» (500 тыс ₽).",
    "Имею опыт публичных выступлений на крупных рекламных форумах и презентаций инвесторам (Яндекс, МТС). Умею презентовать продукт так, чтобы он был понятен бизнесу, пользователям и техническим командам."
  ]

  return (
    <section ref={sectionRef} className={styles.about}>
      <div className={styles.container}>
        <motion.div 
          className={styles.aboutCard}
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ 
            y: -8,
            boxShadow: "0 30px 60px rgba(139, 92, 246, 0.12)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.h2 
            className={styles.cardTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Обо мне
          </motion.h2>
          
          <div className={styles.aboutContent}>
            {aboutParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className={styles.aboutText}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className={styles.skillsCard}
          initial={{ opacity: 0, y: 60, rotateX: -10 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          whileHover={{ 
            y: -8,
            boxShadow: "0 30px 60px rgba(139, 92, 246, 0.12)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className={styles.cardShimmer}
            animate={{
              x: ["-100%", "100%"]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
          
          <motion.h2 
            className={styles.cardTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Мои навыки
          </motion.h2>
          
          <div className={styles.skillsList}>
            {skills.map((skill, index) => (
              <SkillItem
                key={index}
                text={skill.text}
                delay={0.4 + index * 0.12}
                isHighlighted={skill.isHighlighted}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className={styles.decorativeElements}>
        <motion.div 
          className={styles.decorCircle1}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.decorCircle2}
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className={styles.decorLine}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
    </section>
  )
}

export default AboutSection

