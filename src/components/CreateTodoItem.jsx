function CreateTodoItem({ taskInput, setTaskInput, handleAddTask }) {
    return <>
        <div className='row'>
            <div className='col-md-3 col-xs-12'>
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
    </>;
}

export default CreateTodoItem;