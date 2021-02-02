import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			todos:todosData
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(id){
		this.setState(prevState=>{
			const newArr = prevState.todos.map(todo=>{
				if(todo.id==id){
					return{
						...todo,
						completed: !todo.completed
					};
				}
				return todo;
			});
			return(
				todos:newArr
			);
		})
	}

	render(){
		 const items = this.state.todos.map(item => <TodoItem key = {item.id} text={item.text} status={item.completed} handleChange={this.handleChange}/>>)
	    return (
	        <div className="todo-list">
	            {items}
	        </div>
	    )
	}
}
export default App