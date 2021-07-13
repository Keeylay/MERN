import React, {useState} from 'react';

const Input = (props) => {
    const {list, setList} = props;
    // const {task, setTask} = useState({
    //     name: "",
    //     isComplete: false
    // })

    let task = {
        name: "",
        isComplete: false
    };
    
    const onChange= (e) => {
        task.name = e.target.value;
        // setTask({...task});
    }

    const onClick = (e) => {
        setList([...list, task]);
        e.target.value = "";
    }

    return (
        <div className = "box">
            <input className = "form-control" onChange = {onChange} type = "text" name = "task" />
            <button className = "btn btn-primary btn-block mt-1" onClick={onClick}>Add Task</button>
        </div>
    )
}

export default Input;

