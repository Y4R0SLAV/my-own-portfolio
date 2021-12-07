import React, {FC} from 'react'
import Experience from './components/Experience/experience'
import Hello from './components/Hello/hello'
import Skills from './components/Skills/skills'
import Education from './components/Education/education'
import Portfolio from './components/Portfolio/portfolio';
import { ModalDataType } from './App'

const Main: FC<{setActive: (x: boolean) => void, setModalId: (x: number) => void}> = ({setActive, setModalId}) => {
  return (
    <div>
      <Hello />
      <Skills />
      <Experience />
      <Education />
      <Portfolio setActive={setActive} setModalId={setModalId} />
    </div>
  )
}

export default Main
