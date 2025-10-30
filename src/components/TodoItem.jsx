import Button from 'react-bootstrap/Button';
import Tarefa from '../model/Tarefa';

function TodoItem({ task, ind, handleDeleteTask, handleShowModalEdit }) {
    let tarefaAux = new Tarefa();
    tarefaAux = task;

    return <>
        <li className='d-flex justify-content-between list-group-item'>
            {/*task*/}
            <span>Tarefa: {tarefaAux.tarefa}</span>
            {/*<span>Concluida: {tarefaAux.concluida == true ? "true" : "false" }</span>*/}

            <div>
                {/*
                <button onClick={() => { handleCompletionTask(ind, tarefaAux) }} className='btn btn-success'>
                    {tarefaAux.concluida == false ? "Finish Task" : "Return the Task"}
                </button>
                */}
                
                <Button className='m-1' variant="primary" 
                    onClick={()=>{handleShowModalEdit(ind, tarefaAux)}}>
                    Edit
                </Button>
                <button onClick={() => { handleDeleteTask(ind) }} className='btn btn-danger'>
                    Delete
                </button>
            </div>
        </li>
    </>;
}

export default TodoItem;