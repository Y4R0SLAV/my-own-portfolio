import React, {FC} from 'react'
import styles from './modal.module.css'
import { projects } from './../../projects'

type Props = {active: boolean, setActive: (x: boolean) => void, modalId: number}

const Modal: FC<Props> = ({active, setActive, modalId}) => {
  const modalData: any = projects.filter(project => project.id === modalId)[0]

  if (!modalData) {
    return <></>
  }

  return <div className={active === true ? styles.modal + " " + styles.active : styles.modal} onClick={() => setActive(false)} >
    <div className={styles.content} onClick={e => e.stopPropagation()}>
      <h3>{modalData.type + " " +modalData.name}</h3>
      <p>{modalData.body}</p>
      <div className={styles.stack}> <span><b>СТЕК</b></span> <span>{modalData.stack}</span> </div>
      <div className={styles.date}> <span><b>ДАТА</b></span> <span>{modalData.date}</span> </div>
      <div className={styles.images}>
        {//@ts-ignore
        modalData.photos.map(url => <img src={url} alt=""/>)
        }
      </div>
      <a href={modalData.siteUrl} target="_blank">
        { modalData.siteUrl !== "" && 
        <div className={styles.button}>
          Посетить сайт
        </div> }
      </a>

      <a href={modalData.githubUrl} target="_blank">
        { modalData.githubUrl !== "" && 
        <div className={styles.button}>
          Код на гитхаб
        </div> }
      </a>
      </div>  
    </div>
}


export default Modal