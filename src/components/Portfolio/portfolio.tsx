import React, {FC, useState} from 'react'
import styles from './portfolio.module.css'
import urls from './../../urls'


export const projects = [{
  img: "https://demotivation.ru/wp-content/uploads/2020/10/1493123379_myau-krasivye-foto-malenkih-kotov-10.jpg",
  type: "Интернет магазин",
  name: "Ovsyankin",
  date: "Ноябрь, 2021",
  body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, praesentium! Dicta saepe iusto recusandae voluptate minima blanditiis maiores quisquam ea, vero earum ut doloribus, voluptates, voluptatem laudantium hic nesciunt et cum reiciendis praesentium repellendus delectus atque? Id fuga odit quis recusandae vel magni vero consequatur ea nihil quae, qui blanditiis. Vero nam nihil tempore dolor eum. Voluptatem iure eligendi odit provident voluptatibus enim veniam, quasi perspiciatis sint fugiat ipsam excepturi?',
  stack: "HTML, CSS, React, Redux, JS",
  url: "https://ovsyankin-boutique.herokuapp.com/",
  photos: ["", ""],
  id: 1

},
{
  img: "https://demotivation.ru/wp-content/uploads/2020/10/1493123379_myau-krasivye-foto-malenkih-kotov-10.jpg",
  type: "Социальная сеть",
  name: "Samurai JS",
  date: "Ноябрь, 2021",
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugit impedit pariatur unde cumque dolore aspernatur sunt assumenda exercitationem voluptates ipsum, ipsa ex facere libero placeat hic voluptatem ullam id a sapiente atque sequi minima animi? Quis molestiae, sint a, sapiente rem veritatis provident itaque laborum enim dolorem aliquam quam.',
  stack: "HTML, CSS, React, Redux, JS",
  url: "",
  photos: ["", ""],
  id: 2
}]


const getProject = (imgSrc: string, name: string,
                    data: string, type: string,
                    projId: number,
                    handleClick: (x:boolean) => void,
                    setModalId: (x: number) => void) => {
  return <div className={styles.project} onClick={() => {handleClick(true); setModalId(projId)}}>
    <div className={styles.projImg}> <img src={imgSrc} alt={name} /> </div>
    <h3 className={styles.projName}>{type + ` "` + name + `"` }</h3>
    <p className={styles.projData}>{data}</p>
  </div>
} 

const Portfolio: FC<{setActive: (x: boolean) => void, setModalId: (x: number) => void}> = ({setActive, setModalId}) => {
  return <div className={styles.wrapper} id={urls.projects} >
    <div className={styles.container}>
      <div className={styles.leftBlock}>
          <h1>Проекты </h1>
        </div>
      </div>
      <div className={styles.projects}>
        {projects.map(proj => getProject(proj.img, proj.name, proj.date, proj.type, proj.id, setActive, setModalId))}
      </div>
    
  </div>
}


export default Portfolio