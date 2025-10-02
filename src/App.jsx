import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'

function App() {

  // dados que poderiam pertencer a uma base de dados ou API
  const listStudents = [
    { fullName: 'Joao', ageInYears: 20 },
    { fullName: 'Diogo', ageInYears: 50 },
    { fullName: 'Test', ageInYears: 0 },
    { fullName: 'Ramos', ageInYears: 70 },
    { fullName: 'Teramos', ageInYears: 59 }
  ];

  // variavel que ira conter o HTML que ira ser visivel no ecra
  let listStudentsHtml = [];

  // para cada elemento da lista, um aluno ira ser criado
  listStudents.forEach(student => {
    listStudentsHtml.push(<Student name={student.fullName} age={student.ageInYears} />)
  })

  return (
    <>
      Hello class 3

      {listStudentsHtml}
    </>
  )
}

export default App
