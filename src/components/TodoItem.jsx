import Button from 'react-bootstrap/Button';

function TodoItem({ task, ind, handleDeleteTask, handleShowModalEdit }) {
    return <>
        <li className='d-flex justify-content-between list-group-item'>
            {task}

            <div>
                <Button className='me-1' variant="primary" 
                    onClick={()=>{handleShowModalEdit(ind)}}>
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