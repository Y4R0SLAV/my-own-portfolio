import styles from './BurgerMenu.module.css'
import { setBurgerProps } from './header'

const getButton = (text: string,
                    url: string, 
                    setBurgerActive: (x: boolean) => void ) => {
  return <li key={text}><a data-goto={'#' + url} className='menuLink' href='#'> {text.toUpperCase()} </a></li>
}

type burgerProps = {
  buttons: Array<{text: string, url: string}>
}

export const BurgerMenu: React.FC<burgerProps &setBurgerProps> = ({buttons, burgerActive, setBurgerActive}) => {
  return <div className={burgerActive 
                          ? styles.active + " " + styles.menu
                          : styles.menu}
              onClick={() => setBurgerActive(false)}>
      <div className={styles.content}>
        <ul>
          {buttons.map(button => getButton(button.text, button.url, setBurgerActive))}
        </ul>
      </div> 
  </div>
  

} 