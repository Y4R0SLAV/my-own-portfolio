import React from 'react'
import styles from './header.module.css'
import urls from './../../urls';
import { BurgerMenu } from './BurgerMenu';


const buttons = [
  {text: "Привет", url: urls.hello},
  {text: "Навыки", url: urls.skills},
  {text: "Опыт", url: urls.experience},
  {text: "Образование", url: urls.education},
  {text: "Проекты",  url: urls.projects}
]

const Name = () => {
  return <div className={styles.name}>
    Ярослав
  </div>
}

const getButton = (text: string, url: string) => {
  return <li key={text}><a data-goto={'#' + url} className='menuLink' href='#'> {text.toUpperCase()} </a></li>
}

const Navigation = () => {
  return <ul className={styles.navigation}>
      {buttons.map(button => getButton(button.text, button.url))}
    </ul>
}

export type setBurgerProps = {
  burgerActive: boolean;
  setBurgerActive: (x: boolean) => void;
}

const Header: React.FC<setBurgerProps> = ({burgerActive, setBurgerActive}) => {

  return <div className={styles.wrapper + " header"}>
    <div className={styles.container}>
      <Name />
      <Navigation />

      <div className={styles.burger__button} 
          onClick = {(e) => {
            setBurgerActive(!burgerActive)
            // @ts-ignore
            e.target.classList.toggle(styles.active)
          }}>
        <span />
      </div>

    </div>
    <BurgerMenu  
      burgerActive={burgerActive} 
      setBurgerActive={setBurgerActive} 
      buttons={buttons}/>
  </div>
}


export default Header