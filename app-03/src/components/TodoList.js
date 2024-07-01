import { AddItem } from "./AddItem";
import { TodoItem } from "./TodoItem";
import React, { useState } from 'react';

const TASK_LIST =[
    {
        id: 1,
        name: "Tarefa 1",
        isComplete: false
    },
    {
        id: 2,
        name: "Tarefa 2",
        isComplete: false
    },    
    {
        id: 3,
        name: "Tarefa 3",
        isComplete: false
    },
    {
        id: 4,
        name: "Tarefa 4",
        isComplete: false
    }
];

export function TodoList(params) {
    const [tasks, setTaskList] = useState(TASK_LIST);

    function handleOnChange(task) {
        const updatedList = tasks.map((t)=> { 
            if (task.id===t.id) {
                t.isComplete = task.isComplete;
            }
            return t;
        })
        setTaskList(updatedList);
    }

    function handleOnAdd(task) {
        const updatedTasks = tasks.concat({id: tasks.length + 1, name: task, isComplete: false});
        setTaskList(updatedTasks);
    }

    return(
        <section classNamme ="task-list-container">
            <h1>Lista de tarefas</h1>
            <div>
                <p>Total de tarefas: {tasks.length}</p>
                <p>Tarefas pendentes: {tasks.filter(t => t.isComplete===false).length}</p>
                <p>Tarefas Completas: {tasks.filter(t => t.isComplete===true).length}</p>
            </div>

            <AddItem onAdd={handleOnAdd}/>
            <ul>
                {tasks.map((task)=>
                <li key={task.id}>
                    <TodoItem task={task} onCheck={handleOnChange}/>
                </li>)}
            </ul> 
        </section>
    );
}