import Header from "./components/header"
import Addtask from "./components/addtask"
import Todo from "./components/todo"
import { useState, useEffect } from 'react';


function App(){

    const [task, setTask] = useState(JSON.parse(localStorage.getItem("task")) || []);
    
    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(task))
    }, [task])


    // ([
    //     {"id":1, "name":"Zino", "time": "Mummy"},
    //     {"id":2, "name":"Cath", "time": "Abacha"},
    //     {"id":3, "name":"Maureen", "time": "250k"},
    //     {"id":4, "name":"Excel", "time": "Question"},
    //     {"id":5, "name":"Victor", "time": "CEO"},
    //     {"id":6, "name":"Nozie", "time": "JavaScript"},
    //     {"id":7, "name":"Nathan", "time": "Pepper"}
    // ]);

return(
    <>
        < Header /> 
         
        < Addtask task={task} setTask={setTask}/>
        < Todo task={task} setTask={setTask}/>
    
    </>

)
}
export default App