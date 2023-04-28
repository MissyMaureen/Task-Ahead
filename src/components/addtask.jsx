import './addtask.css'

function Addtask({task, setTask}){
    function handleSubmit(e){
        e.preventDefault();

        const date = new Date();
        const Time = date.toLocaleTimeString();
        const day = date.toLocaleDateString();

        const newItem ={
            id:date.getTime(),
            name:e.target.task.value,
            time: `${Time} ${day}`
        };
        setTask([...task, newItem])
        e.target.task.value=""
    }
    return(
        <form onSubmit={handleSubmit} className='frame' >
           <input type="text" placeholder="add task" name='task' autoComplete='off' maxLength={25} className='holder'/>
           <button className='add'>Add</button>
        </form>

    
    );

}

export default Addtask;