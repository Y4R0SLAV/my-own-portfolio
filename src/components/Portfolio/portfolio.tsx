import React, {FC, useState} from 'react'
import styles from './portfolio.module.css'
import urls from './../../urls'
import { projects } from '../../projects'

const getProject = (imgSrc: string, name: string,
                    data: string, type: string,
                    projId: number,
                    handleClick: (x:boolean) => void,
                    setModalId: (x: number) => void) => {
  

  return <div key={projId} className={styles.project} onClick={() => {handleClick(true); setModalId(projId)}}>
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
        {projects.reverse().map(proj => getProject(proj.img, proj.name, proj.date, proj.type, proj.id, setActive, setModalId))}
      </div>
    
  </div>
}


export default Portfolio