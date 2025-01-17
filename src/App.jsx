import './App.css'
import { CssBaseline } from '@mui/material'
import TodoList from './TodoList'
import Navbar from './Navbar'

function App() {
  const title = "Tehtävälista"
  return (
    <>
      <CssBaseline />
      <Navbar title={title} />
      <TodoList title={title} />
    </>
  )
}

export default App