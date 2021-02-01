import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
    const items = todosData.map(item => <TodoItem key = {item.id} text={item.text} status={item.completed}/>)
    return (
        <div className="todo-list">
            {items}
        </div>
    )
}

export default App