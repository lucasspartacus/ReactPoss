export function TodoItem({task, onCheck}) {

    function handleOnChange(event){
        onCheck({ ...task, isComplete: event.target.checked});
        console.log();
    }

    return(
        <div className="task-item">
            <input type="checkbox"  checked={task.isComplete} onChange={handleOnChange}/>{task.name}
        </div>
    )
}