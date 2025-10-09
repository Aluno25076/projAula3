import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'
import StudentManager from './components/StudentManager'

function App() {

  // variavel de estado(State)
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);
  

  /*
  const alertValue = (value) => {
    alert(value);
  }; 
  */

  // esta função vai adicionar uma tarefa do input para a lista de tarefas
  const handleAddTask = () => {
    if(taskInput == ''){
      alert('Please fill out task');
      return;
    }

    // cria uma copia da lista de tarefas~
    // uma vez que não é possivel faze-lo diretamente
    let taskAux = [...taskList];
    // faz-se as mudanças necessaria para a copia do state array
    taskAux.push(taskInput);

    // atualizamos o state array com a propria copia
    // agora com uma nova tarefa
    setTaskList(taskAux);

    // limpa o input
    setTaskInput("");
  };

  // faz parse do state array das tarefas, para os elementos html
  const taskListHtml = taskList.map(task => {
    return <li>{task}</li>;
  });

  return (
    <>
      <div style={{minHeight: '100vh'}} className='container p-2 bg-secondary-subtle rounded'>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            Please insert your task &nbsp;
          </div>

          <div className='col-md-6 col-xs-12'>

            <input className='form-control' value={taskInput}
              onChange={(evt) => { setTaskInput(evt.target.value) }} />
          </div>
        </div>


        <div className='row mt-2'>
          <div className='col-md-3 col-sm-6 col-xs-12'>
            <button className='form-control' onClick={() => {
              handleAddTask();
            }}>
              Add task
            </button>
          </div>

        </div>

        <br />

        <ol>
          {taskListHtml}
        </ol>




        {/**<StudentManager></StudentManager> */}
      </div>
    </>
  )
}

export default App
