import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './TruePeopleSection.module.css'

const metrics = [
  { name: 'Дата аватаров', male: 8, female: 10 },
  { name: 'Активность аккаунта', male: 8, female: 8 },
  { name: 'Взаимодействия', male: 10, female: 5 },
  { name: 'Страна регистрации', male: 6, female: 5 },
  { name: 'Ритм онлайна', male: 7, female: 7 },
]

function HalfCircleGauge({ side, isInView }: { side: 'male' | 'female'; isInView: boolean }) {
  const isMale = side === 'male'
  const gradientId = isMale ? 'maleGradient' : 'femaleGradient'
  
  return (
    <motion.div 
      className={styles.gaugeWrapper}
      animate={isInView ? {
        y: [0, -8, 0],
      } : {}}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: isMale ? 0 : 0.5
      }}
    >
      <svg viewBox="0 0 200 120" className={styles.gaugeSvg}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            {isMale ? (
              <>
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="100%" stopColor="#764ba2" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#f093fb" />
                <stop offset="100%" stopColor="#f5576c" />
              </>
            )}
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {[...Array(7)].map((_, i) => {
          const angle = (Math.PI / 6) * (i + 1)
          const x1 = 100 - Math.cos(angle) * 50
          const y1 = 100 - Math.sin(angle) * 50
          const x2 = 100 - Math.cos(angle) * 75
          const y2 = 100 - Math.sin(angle) * 75
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={`url(#${gradientId})`}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={isInView ? { opacity: 0.6, pathLength: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            />
          )
        })}

        <motion.path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        />

        <motion.circle
          cx="100"
          cy="60"
          r="25"
          fill={`url(#${gradientId})`}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.15 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
        
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {isMale ? (
            <>
              <circle cx="100" cy="55" r="8" fill={`url(#${gradientId})`} />
              <rect x="92" y="67" width="16" height="20" rx="3" fill={`url(#${gradientId})`} />
              <rect x="85" y="70" width="8" height="3" rx="1.5" fill={`url(#${gradientId})`} />
              <rect x="107" y="70" width="8" height="3" rx="1.5" fill={`url(#${gradientId})`} />
            </>
          ) : (
            <>
              <circle cx="100" cy="55" r="8" fill={`url(#${gradientId})`} />
              <path d="M88 67 L100 90 L112 67 Z" fill={`url(#${gradientId})`} />
              <rect x="85" y="70" width="8" height="3" rx="1.5" fill={`url(#${gradientId})`} />
              <rect x="107" y="70" width="8" height="3" rx="1.5" fill={`url(#${gradientId})`} />
            </>
          )}
        </motion.g>

        {[...Array(5)].map((_, i) => {
          const offsetAngle = (Math.PI / 6) * (i + 1.5)
          const cx = 100 - Math.cos(offsetAngle) * 35
          const cy = 100 - Math.sin(offsetAngle) * 35
          return (
            <motion.circle
              key={`dot-${i}`}
              cx={cx}
              cy={cy}
              r="3"
              fill={`url(#${gradientId})`}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
            />
          )
        })}
      </svg>
      
      <motion.div 
        className={`${styles.gaugeLabel} ${isMale ? styles.maleLabel : styles.femaleLabel}`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <span className={styles.gaugeLabelTitle}>{isMale ? 'Мужчина' : 'Женщина'}</span>
        <span className={styles.gaugeLabelDesc}>
          Оценивает всю {isMale ? 'мужскую' : 'женскую'} аудиторию в канале по 5 ключевым показателям (Индекс True от 1 до 10)
        </span>
      </motion.div>
    </motion.div>
  )
}

function MetricBar({ metric, index, isInView }: { metric: typeof metrics[0]; index: number; isInView: boolean }) {
  const maleWidth = (metric.male / 10) * 100
  const femaleWidth = (metric.female / 10) * 100

  return (
    <motion.div 
      className={styles.metricRow}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className={styles.metricBarLeft}>
        <motion.div 
          className={styles.barFillMale}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${maleWidth}%` } : {}}
          transition={{ duration: 0.8, delay: 0.8 + index * 0.1, ease: "easeOut" }}
        >
          <span className={styles.barValue}>{metric.male} True баллов</span>
        </motion.div>
      </div>
      
      <div className={styles.metricName}>{metric.name}</div>
      
      <div className={styles.metricBarRight}>
        <motion.div 
          className={styles.barFillFemale}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${femaleWidth}%` } : {}}
          transition={{ duration: 0.8, delay: 0.8 + index * 0.1, ease: "easeOut" }}
        >
          <span className={styles.barValue}>{metric.female} True баллов</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

function TruePeopleSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
    <section ref={sectionRef} className={styles.truePeople}>
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
            True People – софт <span className={styles.highlight}>по отбору</span>
            <br />
            эффективных каналов, который был придуман и
            <br />
            разработан под моим руководством
          </motion.h2>
        </motion.div>

        <motion.div 
          className={styles.mainCard}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className={styles.cardGlow}
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.p 
            className={styles.cardDescription}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Помогает команде закупщиков Oreon оценивать каналы
            <br />
            по индексу True и отбирать площадки с максимально
            <br />
            живой и вовлечённой аудиторией
          </motion.p>

          <div className={styles.contentWrapper}>
            <HalfCircleGauge side="male" isInView={isInView} />
            
            <div className={styles.metricsCenter}>
              {metrics.map((metric, index) => (
                <MetricBar key={metric.name} metric={metric} index={index} isInView={isInView} />
              ))}
            </div>
            
            <HalfCircleGauge side="female" isInView={isInView} />
          </div>
        </motion.div>
      </div>

      <div className={styles.backgroundEffects}>
        <motion.div 
          className={styles.gradientOrb1}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 40, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gradientOrb2}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className={styles.gridPattern} />
        <div className={styles.noiseOverlay} />
      </div>
    </section>
  )
}

export default TruePeopleSection

