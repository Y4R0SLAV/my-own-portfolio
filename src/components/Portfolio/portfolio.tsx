import React from 'react'
import styles from './portfolio.module.css'


const getProject = (imgSrc: string, name: string, data: string, type: string) => {
  return <div className={styles.project}>
    <div className={styles.projImg}> <img src={imgSrc} alt={name} /> </div>
    <h3 className={styles.projName}>{type + ` "` + name + `"` }</h3>
    <p className={styles.projData}>{data}</p>
  </div>
} 

const projects = [{
  img: "https://demotivation.ru/wp-content/uploads/2020/10/1493123379_myau-krasivye-foto-malenkih-kotov-10.jpg",
  type: "Интернет магазин",
  name: "Ovsyankin",
  data: "Ноябрь, 2021"
},
{
  img: "https://demotivation.ru/wp-content/uploads/2020/10/1493123379_myau-krasivye-foto-malenkih-kotov-10.jpg",
  type: "Социальная сеть",
  name: "Samurai JS",
  data: "Ноябрь, 2021"
}]

const Portfolio = () => {
  return <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.leftBlock}>
          <h1>Проекты </h1>
        </div>
      </div>
      <div className={styles.projects}>
        {projects.map(proj => getProject(proj.img, proj.name, proj.data, proj.type))}
      </div>
    
  </div>
}


export default Portfolio