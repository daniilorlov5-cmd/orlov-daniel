import { motion } from 'framer-motion'
import styles from './HeroSection.module.css'
import heroPhoto from '../../photo/Рисунок37.jpg'

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1 
            className={styles.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Даниил Орлов
          </motion.h1>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Product Manager / Product Owner
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Управляю полным циклом разработки digital-продуктов: от идеи и гипотез до запуска и роста.
            Создаю решения на данных, логике и технологиях.
            Работаю на результат и беру ответственность за продукт и команду.
          </motion.p>
          
          <motion.div 
            className={styles.cards}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className={styles.contactCard}>
              <div className={styles.contactInfo}>
                <p><span className={styles.label}>Почта:</span> dan0rlov@yandex.ru</p>
                <p><span className={styles.label}>Telegram:</span> https://t.me/orlovdaniel</p>
                <p><span className={styles.label}>VK:</span> daniil824525</p>
              </div>
              <motion.a 
                href="https://t.me/orlovdaniel"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.experienceBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Продуктовый опыт более 5 лет
              </motion.a>
            </div>
            
            <div className={styles.eduCard}>
              <div className={styles.eduIcon}>
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
                  <path d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="20" cy="22" r="3" fill="#8b5cf6"/>
                </svg>
              </div>
              <p className={styles.eduMain}>21 год, ЯРГУ им. П.Г. Демидова, 4 курс</p>
              <p className={styles.eduSub}>«Факультет экономики и менеджмента» (2021-2025гг.)</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.photoWrapper}
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className={styles.flipContainer}>
            <div className={styles.flipCard}>
              <div className={styles.flipFront}>
                <div className={styles.photoFrame}>
                  <img 
                    src={heroPhoto} 
                    alt="Даниил Орлов" 
                    className={styles.photo}
                  />
                </div>
              </div>
              <div className={styles.flipBack}>
                <div className={styles.backContent}>
                  <h3 className={styles.backTitle}>Готов к сотрудничеству</h3>
                  <p className={styles.backText}>Product Manager с опытом создания успешных digital-продуктов</p>
                  <a href="https://t.me/orlovdaniel" target="_blank" rel="noopener noreferrer" className={styles.backButton}>
                    Написать в Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.photoGlow} />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

