import React from 'react'
import styles from './header.module.css'
import urls from './../../urls';

const Name = () => {
  return <div className={styles.name}>
    Ярослав
  </div>
}

const getButton = (text: string, url: string) => {
  return <li><a href={`#${url}`}> {text.toUpperCase()} </a></li>
}

const Navigation = () => {
  const buttons = [{text: "Привет", url: urls.hello},
                  {text: "Навыки", url: urls.skills},
                  {text: "Опыт", url: urls.experience},
                  {text: "Образование", url: urls.education},
                  {text: "Проекты",  url: urls.projects}
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