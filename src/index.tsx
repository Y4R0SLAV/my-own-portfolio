import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);





const menuLinks = document.querySelectorAll('.menuLink[data-goto]')

const onMenuLinkClick = (e: any) => {
  const menuLink = e.target
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto)
    // @ts-ignore
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('.header').offsetHeight

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth"
    })

    e.preventDefault()
  }
}

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => 
      menuLink.addEventListener('click', onMenuLinkClick)
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
