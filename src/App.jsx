import { useState,useEffect } from "react"

import './styles.css'
import TodoList from "./TodoList"
export default function App() {

  const [newTodoName, setNewTodoName] = useState("")
  const [todos, setTodos] = useState([])



  function addTodos(){
    if(newTodoName === "") return
    setTodos(currentTodos =>{
      return [...currentTodos,{name:newTodoName, isComplete:false, id: crypto.randomUUID()}]
    })
    setNewTodoName("")
  }
  function deleteButton(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  function toggleButton(id,checked){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return {...todo,isComplete:checked}
        }
        return todo
      })
    
    })
    
  }

  return(
    <>
    <h1>Todo List</h1>

    <ul>
      {todos.map(todo => {
        return(
          <TodoList key={todo.id} {...todo} toggleButton={toggleButton} deleteButton={deleteButton}/>
           )
      })}
    </ul>

    
    

    <div id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input type="text" id="todo-input" value={newTodoName} onChange={e=>setNewTodoName(e.target.value)}/>
      <button onClick={addTodos}>Add Todo</button>
    </div>


    </>
   
  )
  

}

// Finished a todo list and undesrtanding 
// how mapping works 

