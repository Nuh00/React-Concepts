import { useState,useEffect } from "react"

import './styles.css'
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


  function toggleButton(id,checked){
    
  }

  return(
    <>
    <h1>Todo List</h1>

    <ul>
      {todos.map(todo => {
        return(
          <li className="list-item" key={todo.id}>
        <label className="list-item-label">
          <input type="checkbox" checked = {todo.isComplete}  data-list-item-checkbox  onChange={(e)=> toggleButton(todo.id,e.target.checked)}/>
          <span data-list-item-text>{todo.name}</span>
        </label>
        <button data-button-delete>Delete</button>
      </li>
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

