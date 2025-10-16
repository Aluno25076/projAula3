import Button from 'react-bootstrap/Button';

function TodoItem({ task, ind, handleDeleteTask, handleShow }) {
    return <>
        <li className='d-flex justify-content-between list-group-item'>
            {task}

            <div>
                <Button className='me-1' variant="primary" 
                    onClick={()=>{handleShow(ind)}}>
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