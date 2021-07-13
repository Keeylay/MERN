import React from 'react';

const Task = (props) => {
    const {task, index, list, setList} = props;
    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        });
    }

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };

    return (
        <div className = "box 2">
            <h3 style = {{ textDecoration: task.isComplete && "line-through"}}> {task.name}</h3>

            <div className = 'taskbox'>
                <label htmlFor = "checkbox"> Completed?</label>
                <input onChange={onChange} type="checkbox" checked={task.isComplete}/>
                <button className="btn btn-sm btn-danger" onClick={onClick}>Delete Objective</button>
            </div>
        </div>
    )

}

export default Task;