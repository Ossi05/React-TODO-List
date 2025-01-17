import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';

export default function TodoItem({ todo, handleToggle, deleteTodo, editTodo }) {

    return (
        <ListItem key={todo.id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" color='error' onClick={() => deleteTodo(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} onClick={handleToggle(todo.id)} dense >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': `checkbox-list-label-${todo.id}` }}
                    />
                </ListItemIcon>
                <TextField
                    id={todo.id}
                    sx={{
                        width: "80%", '& .MuiInputBase-input': {
                            textDecoration: todo.completed ? "line-through" : "none",
                        },
                    }}
                    value={todo.text}
                    variant="standard"
                    onChange={e => editTodo(e.target.value, todo.id)}
                    onClick={(e) => e.stopPropagation()}
                />
            </ListItemButton>
        </ListItem>
    )
}