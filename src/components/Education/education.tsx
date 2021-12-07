import { url } from 'inspector'
import React from 'react'
import styles from './education.module.css'


const Education = () => {
  return <div className={styles.wrapper} >
    <div className={styles.container}>
    <div className={styles.leftBlock}>
        <h1>Образование </h1>
        <p>Всю свою жизнь я верю в то, что образование важно. Стараюсь узнавать что-то новое каждый божий день.</p>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.skill}>
          <h3>Студент</h3> <p className={styles.place}>ТвГУ</p>
          <p className={styles.data}>Сентябрь, 2020 - Декабрь, 2021</p>
          <p>Получал фундаментальные знания о математике, программировании и мироздании.</p>
        </div>

        <div className={styles.skill}>
        <h3>Курсы SQL</h3> <p className={styles.place}> Stepik</p>
          <p className={styles.data}>Июнь, 2021 - Июнь, 2021</p>
          <p>Закончил курс SQL, могу посылать запросы на чистом SQL направо и налево</p>
        </div>
      </div>  
    </div>
  </div>
}


export default Education