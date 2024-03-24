

export default function TodoList({id, name, isComplete, toggleButton, deleteButton}) {
    return(
        <li className="list-item" key={id}>
        <label className="list-item-label">
          <input type="checkbox" checked = {isComplete}  data-list-item-checkbox  onChange={(e)=> toggleButton(id,e.target.checked)}/>
          <span data-list-item-text>{name}</span>
        </label>
        <button data-button-delete onClick={()=>deleteButton(id)}>Delete</button>
      </li>
    )
}
