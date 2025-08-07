import { useState } from 'react'
import { useEffect } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])
  
    fetch("http://localhost:3000/todos")
      .then( async function(res){
        const json = await res.json()
        setTodos(json.todos)
      })
  

  return (  
    <>
      <CreateTodo >CreateTodo</CreateTodo>
       <Todo todos={todos}></Todo>
    </>
  )
}

export default App
