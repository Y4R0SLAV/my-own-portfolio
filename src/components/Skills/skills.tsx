import React from 'react'
import styles from './skills.module.css'
import urls from './../../urls';


const Skills = () => {
  return <div className={styles.wrapper} id={urls.skills} >
    <div className={styles.container}>
      <div className={styles.leftBlock}>
        <h1> Навыки </h1>
        <p> Меня вдохновляет создание великолепной работы с людьми, которые так же, как и я, увлечены созданием чего-то потрясающего.</p>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.skill}>
          <h3>Веб разработка</h3>
          <p>Javascript, Typescript, jQuery(basics), Node.js, SQL</p>
        </div>

        <div className={styles.skill}>
          <h3>Фронтенд </h3>
          <p>React + Redux, HTML, CSS, SASS</p>
        </div>

      </div>  
    </div>
  </div>
}


export default Skills