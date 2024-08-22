import React from 'react'
import ProblemCard from '../components/ProblemCard'
import Header from '../components/Header'
import CodeEditor from '../components/CodeEditor'
import './ProblemPage.css'

const ProblemPage = () => {
  return (
    <div style={{"height":"100%","backgroundColor":"rgb(34, 40, 49)"}}>
        <Header></Header>
        <div className='problem-container'>
        <ProblemCard></ProblemCard>
        <CodeEditor></CodeEditor>
       </div>
    </div>
  )
}

export default ProblemPage