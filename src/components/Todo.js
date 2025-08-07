import React, { useState, useEffect } from 'react';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/storage';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        const storedTasks = getFromLocalStorage('tasks');
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    const handleInputChange = (e) => {
        setTaskInput(e.target.value);
    };

    const addTask = () => {
        if (taskInput.trim()) {
            const newTasks = [...tasks, { text: taskInput, completed: false }];
            setTasks(newTasks);
            saveToLocalStorage('tasks', newTasks);
            setTaskInput('');
        }
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
        saveToLocalStorage('tasks', newTasks);
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        saveToLocalStorage('tasks', newTasks);
    };

    return (
        <div className="todo">
            <span className="header">Todo List</span>
            
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? 'completed' : ''}>
                        <span><input type='checkbox' checked={task.completed} onChange={() => toggleTaskCompletion(index)} /> {task.text}</span>
                        <button onClick={() => removeTask(index)} title='Delete'>x</button>
                    </li>
                ))}
            </ul>
            <input 
                type="text" 
                value={taskInput} 
                onChange={handleInputChange} 
                placeholder="New task"
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
            />
        </div>
    );
};

export default Todo;