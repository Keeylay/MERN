import React, {useState} from 'react';

const Input = (props) => {
    const {list, setList} = props;
    const [task, setTask] = useState("")

    // let task = {
    //     name: "",
        // isComplete: false
    // };
    
    const onChange= (e) => {
        // task.name = e.target.value;
        setTask(e.target.value)
        // setTask({...task});
    }

    const onClick = (e) => {
        let newTask = {
            name: task,
            isComplete: false
        }
        setList([...list, newTask]);
        // e.target.value = "";
    }

    return (
        <div className = "box">
            <input className = "form-control" onChange = {onChange} type = "text" name = "task" />
            <button className = "btn btn-primary btn-block mt-1" onClick={onClick}>Add Task</button>
        </div>
    )
}

export default Input;

