import React from 'react'
import Experience from './components/Experience/experience'
import Hello from './components/Hello/hello'
import Skills from './components/Skills/skills'
import Education from './components/Education/education'
import Portfolio from './components/Portfolio/portfolio';

const Main = () => {
  return (
    <div>
      <Hello />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
    </div>
  )
}

export default Main
