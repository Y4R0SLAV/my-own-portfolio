import React, { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Main from './Main'
import Modal from './components/Modal/modal'

export type ModalDataType = {
  name: string,
  body: string,
  stack: string,
  date: string,
  photos: Array<string>,
  url: string | null
}

function App() {
  const [modalActive, setModalActive] = useState(false)
  const [modalId, setModalId] = useState(0)
  const [burgerActive, setBurgerActive] = useState(false)

  useEffect(() => {
    if (modalActive || burgerActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [modalActive, burgerActive]);

  return (
    <div className='App'>
      <Header burgerActive={burgerActive} setBurgerActive={setBurgerActive}/>
      <Main setActive={setModalActive} setModalId={setModalId}/>
      <Footer/>
      <Modal active={modalActive} setActive={setModalActive} modalId={modalId}/>
    </div>
  );
}

export default App
