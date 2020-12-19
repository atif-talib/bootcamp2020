import React,{useState} from 'react';

const ToDo = (props)=> { 
    let [task,setTask]=useState(props.task);
    let [counter,setCounter]=useState(props.counter);
    let [tasks,setTasks]=useState([]);
    function clearForm(){
        setTask("");
    }
    let addTask =()=>{
        if(task==="")
        {
            alert("Task Field can't be empty");
        }
        else{
            let old = tasks;
            old.push(<li>{task}</li>);
            setTasks(old);
            setCounter(counter+1);
            clearForm();
        }
    }
    return (
        <React.Fragment>
        <form>
            <input type="text" id="task" name="task" onChange={(e)=>setTask(e.target.value)} value={task} />
            <input type="button" id="add" name="add" value="Add" onClick={addTask} />
            <h1>To Do Tasks {counter}</h1>

        </form>
        <ul>
        {tasks}
        </ul>
        </React.Fragment>
        );
    };
    export default ToDo;