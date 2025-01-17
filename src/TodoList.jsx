import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Typography } from '@mui/material';
import "./TodoList.css";

const TodoKey = "todos";

export default function TodoList({ title }) {
    const [todos, setTodos] = useState(getTodosFromLocalStorage);

    useEffect(() => {
        localStorage.setItem(
            TodoKey,
            JSON.stringify(todos)
        );
    }, [todos]);

    const handleToggle = id => () => {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        });
    };

    const deleteTodo = id => {
        console.log(id)
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id);
        });
    }

    const addTodo = todo => {
        setTodos(currentTodos => {
            return [
                ...currentTodos,
                todo,
            ]
        })
    }

    const editTodo = (newText, id) => {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, text: newText };
                }
                return todo;
            })
        });
    }

    return (
        <section className='TodoList'>
            <Typography variant='h3' component="h1">{title}</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {todos.map(todo => {
                    return <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle} deleteTodo={deleteTodo} editTodo={editTodo} />
                })}
            </List>
            <TodoForm addTodo={addTodo} createTodo={createTodo} />
        </section>
    );
}


const getTodosFromLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem(TodoKey));
    if (!todos) {
        return [createTodo("Sinun Ensimmäinen Todo!")];
    }

    return todos;
}

const createTodo = text => {
    return {
        id: crypto.randomUUID(),
        text: text,
        completed: false
    }
}