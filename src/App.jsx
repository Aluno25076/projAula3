//import { useEffect, useState } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'
import StudentManager from './components/StudentManager'
import TodoItem from './components/TodoItem'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

//é necessario instalar react-bootstrap: npm install react-bootstrap

function App() {
  // NEVER CHANGE STATE VARIABLES DIRECTLY -> always use the set function

  // variavel state do modal
  const [show, setShow] = useState(false);

  // variavel state que contem o index da tarefa que estamos a editar
  const [taskIndEdit, setTaskIndEdit] = useState(-1);
  const [taskEditInput, setTaskEditInput] = useState('');
  
  // variavel de estado(State)
  // o state da variavel é ligado ao input
  const [taskInput, setTaskInput] = useState('');

  // lista de tarefas, que será um array de strings
  const [taskList, setTaskList] = useState([]);
  

  // variavel para selecionar a tarefa a eleminar (para o delete modal que fiz em casa)
  //const [taskToDelete, setTaskToDelete] = useState(null);

   /*
  const alertValue = (value) => {
    alert(value);
  }; 
  */


  /**
   * Handlers
   * 
   * AKA
   * 
   * Functions that will do something
   * 
   */


  // função que fecha o modal
  const handleClose = () => setShow(false);

  /*
  const handleShow = (taskIndex) => {
  
    setShow(true)
  };
  */

  const handleShowModalEdit = (taskIndex) => {
    // copiar o state array de tarefas
    const taskListAux = [...taskList];
    // vou ler a tarefa dado o indice
    const taskToShow = taskListAux[taskIndex];

    // guardar no input do modal de editar tarefa
    setTaskEditInput(taskToShow);
    // guarda numa variavel de estado o indice da task que estamos a alterar
    setTaskIndEdit(taskIndex);
    // altera a variavel de estado ligada ao modal
    setShow(true);
  };

  // esta função vai adicionar uma tarefa do input para a lista de tarefas
  /**
   * 
   * @returns nada, apenas altera o state do array
   */
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

  /**
   * Esta função elemina um elemento do array dado o seu index
   * 
   * @param {*} index - o index do elemento do array
   * @returns nada, apenas altera o state do array
   */
  const handleDeleteTask = (index) =>{
    if(index<0 || index>=taskList.length){
      allert("You are introducing an invalid index");
      return;
    }

    // cria uma copia da lista de tarefas
    // podemos faze-lo porque 
    //let taskToDelete = taskList[index];

    // #1 - copiar/clonar

    // fazer a alteração do array
    let taskAux = [...taskList];

    // #2 - alterar

    // array.splice recebe:
    // - o indice onde começa a apagar elementos,
    // - e recebe o numero de elementos a apagar
    taskAux.splice(index, 1);

    // #3 - atualizar
    setTaskList(taskAux);

    // limpa a seleção (para o modal que fiz em casa)
    //setTaskToDelete(null);
  } 

  const handleEditTask = (index) => {
    if(index<0 || index>=taskList.length){
      allert("You are introducing an invalid index");
      return;
    }

    let idAux = index;

    // cria uma copia da lista de tarefas~
    // uma vez que não é possivel faze-lo diretamente
    let taskAux = [...taskList];
    // faz-se as mudanças necessaria para a copia do state array
    taskAux.push(taskEditInput);

    // atualizamos o state array com a propria copia
    // agora com uma nova tarefa
    setTaskList(taskAux);

    taskAux.splice(index, 1);
  }

  // START PHARSING HTML OUTPUT
  //
  // faz parse do state array das tarefas, para os elementos html
  const taskListHtml = taskList.map((task, ind) => {
    return <TodoItem task={task} ind={ind}
      handleDeleteTask={handleDeleteTask} handleShowModalEdit={handleShowModalEdit} />
    
    {/*
      // o que fiz em casa
    <li className='d-flex justify-content-between list-group-item'>
        {task}
        <div>
          <button onClick={() => setTaskToDelete(ind)} className='btn btn-danger form-control data-bs-toggle="modal"' data-bs-toggle="modal" data-bs-target="#DeleteTaskModal">Delete</button>
        </div>

      </li>;
      */}
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

        <div className='row mt-4'>
          <div>
            <ul className='list-group'>
              {taskListHtml}
            </ul>
          </div>
        </div>

        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Task Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='row'>
                <div className='col-sm-3 col-xs-12'>
                  Task
                </div>
                <div className='col-sm-9 col-xs-12'>
                  <input className='form-control' 
                    value={taskEditInput}
                    onChange={(evt)=>{setTaskEditInput(evt.target.value)}}
                    ></input>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Discard
              </Button>
              <Button variant="primary" onClick={() => handleEditTask(taskIndEdit)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>

        {/**<StudentManager></StudentManager> */}
      </div>
      
      {/*
        //o que fiz em casa
      <div class="modal fade" id="DeleteTaskModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Deleting Task</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you sure about deleting this task?
              <br/>
              This change will be permanent.
            </div>
            <div class="modal-footer">
              <button type="button" onClick={() => {setTaskToDelete(null);}} class="btn btn-secondary" data-bs-dismiss="modal">No</button>
              <button type="button" onClick={() => { handleDeleteTask(taskToDelete); }} class="btn btn-primary" data-bs-dismiss="modal">Yes</button>
            </div>
          </div>
        </div>
      </div>
      */}
      
    </>
  )
}

export default App
