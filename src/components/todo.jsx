import './todo.css'


function Todo ({task, setTask}){
    function handleDelete(id){
        const updatedTask = task.filter(task => 
            id !== task.id)
        setTask (updatedTask);
    }

     return(
        <div className='todo'>
            <div className="top">

                <div className="topleft">
                    <h2>Todo</h2>
                    <span className='count'>{task.length}</span>
                </div>

                <div className='topright'>
                    <p className='count'onClick={()=> setTask([])}>Clear All</p>
                </div>

         </div>
            <div className="bottom">

                {task.map((data)=>(
                    <div className="card" key={data.id}>
                    <div className="card-top">
                        <h3>{data.name}</h3>
                        <div className="btn" onClick ={()=>handleDelete (data.id)} >Delete</div>
                    </div>
                    <div className="time"> {data.time}</div>
                </div>
                ))}
                    

                </div>
        </div>
    );
}
export default Todo