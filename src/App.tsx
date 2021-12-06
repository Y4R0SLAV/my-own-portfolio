import React from 'react'
import './App.css'
import Header from './components/Header/header'
import Main from './Main'

const Footer = () => {
  return <div>
    footer
  </div>
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App
