import React from "react";
import InputText from "./InputText";
import InputRadio from "./InputRadio";
class App extends React.Component{
    constructor(){
        super();
        this.state = {
        	type:["text","text","email","radio","text"],
        	name:["fName","lName","email","gender","phone"],
        	title:["First Name: ","Last Name: ","Email Address: ","Gender: ","Phone Number: "],
        	currentState:0,
        	fName:"",
        	lName:"",
        	email:"",
        	phone:"",
        	button:"Next"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
    	const {name, value} = event.target;
    	this.setState({
    		[name]:value
    	})
    }

    handleClick(event){
    	event.preventDefault();
    	this.setState(prevState => {
    		return{
    			currentState: (prevState.currentState)+1,
    			button:(prevState.currentState===2)?"Submit":prevState.button
    		}
    	})
    }

    render(){
        return(
            <div >
            	<form className="form-style-1" style={this.state.currentState===5?{display:"none"}:{display:"block"}}>
	            	{this.state.currentState===5?"":
	            		(this.state.currentState===3)?
	            		<InputRadio 
		            		title={this.state.title[this.state.currentState]} 
		            		type={this.state.type[this.state.currentState]} 
		            		name={this.state.name[this.state.currentState]} 
		            		value={this.state[this.state.name[this.state.currentState]]} 
		            		handleChange={this.handleChange} 
		            	/>:
		            	<InputText 
		            		title={this.state.title[this.state.currentState]} 
		            		type={this.state.type[this.state.currentState]} 
		            		name={this.state.name[this.state.currentState]} 
		            		value={this.state[this.state.name[this.state.currentState]]} 
		            		handleChange={this.handleChange} 
		            	/>
	            	}
	            	<br/>
	            	<br/>
	            	<br/>
	            	<button value={this.state.button} onClick={this.handleClick}>{this.state.button}</button>
            	</form>
            	<br/>
            	<div style={this.state.currentState===5?{display:"block",fontFamily:"sofia",color:"green"}:{display:"none"}}>
            		<h1>Your Response</h1>
	            	<h2>First Name: {this.state.fName}</h2>
	            	<h2>Last Name: {this.state.lName}</h2>
	            	<h2>Email: {this.state.email}</h2>
	            	<h2>Gender: {this.state.gender}</h2>
	            	<h2>Phone: {this.state.phone}</h2>
            	</div>
            	<meter style={{width:"100%",transition:"1s ease"}} min="0" value={this.state.currentState*25} max="100"></meter>
            </div>
        );
    }
}

export default App