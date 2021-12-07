import React from 'react'
import urls from '../../urls'
import styles from './experience.module.css'

const Experience = () => {
  return <div className={styles.wrapper} id={urls.experience} >
    <div className={styles.container}>
    <div className={styles.leftBlock}>
        <h1>Опыт </h1>
        <p>Рабочий опыт в веб программировании, пока что, я создаю себе сам</p>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.skill}>
          <h3>Веб разработчик</h3> <p className={styles.place}>Курс Samurai JS</p>
          <p className={styles.data}>Сентябрь, 2021 - Ноябрь, 2021</p>
          <p>Написал неполноценную соц. сеть на React + Redux. Используя различные библиотеки, в т.ч. Typescript. Большинство компонент - классовые.</p>
        </div>

        <div className={styles.skill}>
        <h3>Веб разработчик</h3> <p className={styles.place}> Свободное плавание</p>
          <p className={styles.data}>Ноябрь, 2021 - Настоящее</p>
          <p>Закончил курс, теперь я изучаю современную документацию и предпринимаю попытки работать за деньги.</p>
        </div>
      </div>  
    </div>
  </div>
}


export default Experience