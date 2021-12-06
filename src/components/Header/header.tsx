import React from 'react'
import styles from './header.module.css'

const Name = () => {
  return <div className={styles.name}>
    Ярослав
  </div>
}

const getButton = (text: string, url: string) => {
  return <li><a href="{string}"> {text.toUpperCase()} </a></li>
}

const Navigation = () => {
  const buttons = [{text: "Привет", url: ""},
                  {text: "Навыки", url: ""},
                  {text: "Опыт", url: ""},
                  {text: "Образование", url: ""},
                  {text: "Проекты", url: ""},
                  {text: "Cвязаться со мной", url: ""}
                ]
  return <ul className={styles.navigation}>
      {buttons.map(button => getButton(button.text, button.url))}
    </ul>
}

const Header = () => {
  return <div className={styles.wrapper}>
    <div className={styles.container}>
    
    <Name />
    <Navigation />
    </div>
  </div>
}


export default Header