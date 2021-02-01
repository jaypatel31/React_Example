import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			todos:todosData
		}
	}
	render(){
		 const items = this.state.todos.map(item => <TodoItem key = {item.id} text={item.text} status={item.completed}/>)
	    return (
	        <div className="todo-list">
	            {items}
	        </div>
	    )
	}
}
export default App