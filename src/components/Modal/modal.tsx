import React, {FC} from 'react'
import { ModalDataType } from '../../App'
import { projects } from '../Portfolio/portfolio'
import styles from './modal.module.css'

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
      <a href={modalData.url} target="_blank">
        <div className={styles.button}>
          Посетить сайт
        </div>
      </a>
      </div>  
    </div>
}


export default Modal