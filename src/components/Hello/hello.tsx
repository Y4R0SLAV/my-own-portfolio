import React from 'react'
import styles from './hello.module.css'

const getContact = (name: string, data: string) => {
  return <li className={styles.contactItem}>
    <span className={styles.contactName}> {name.toUpperCase()} </span>
    <span className={styles.contactData}> {data} </span>
  </li>
}

const contacts = [{name: "Телефон", data: "+7-960-713-77-57"}, {name: "Почта", data: "jeros1337@gmail.com"}]


const Contacts = () => {
  return <ul className={styles.contacts}>
    {contacts.map(contact => getContact(contact.name, contact.data))}
  </ul>
}
const Hello = () => {
  return <div className={styles.wrapper}>
    <div className={styles.container}>
      <h4>Я - Кораблев Ярослав </h4>
      <p> Веб разработчик из Твери. В настоящее время - не имею постоянной работы. Хочу взять на себя больше работы и повысить свои навыки в качестве веб-разработчика. </p>
      <Contacts />
    </div>
  </div>
}


export default Hello