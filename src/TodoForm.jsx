import { IconButton, InputAdornment, TextField } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';

export default function TodoForm({ addTodo, createTodo }) {
    const [text, setText] = useState("");

    const handleChange = e => {
        setText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const todo = createTodo(text);
        addTodo(todo);
        setText("");
    }

    return (
        <ListItem className='TodoForm'>
            <form onSubmit={handleSubmit} onChange={handleChange} method='POST' action='/' style={{ width: "100%" }}>
                <TextField
                    sx={{ width: '100%' }}
                    id="outlined-basic"
                    label="Lisää tehtävä"
                    placeholder='Lisää tehtävä'
                    variant="outlined"
                    name='addTodo'
                    value={text}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Create Todo"
                                        edge="end"
                                        type="submit"
                                    >
                                        <CreateIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </form>
        </ListItem>
    )
}