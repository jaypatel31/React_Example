import React from "react";
import ChangeBox from "./ChangeBox";
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            color: "rgb(255,255,255)"
        }
        this.clickHandle = this.clickHandle.bind(this);
    }

    clickHandle(){
    	let R = Math.floor((Math.random() * 255) + 1);
    	let G = Math.floor((Math.random() * 255) + 1);
    	let B = Math.floor((Math.random() * 255) + 1);
    	this.setState(()=>{
    		return {
    			color:`rgb(${R},${G},${B})`
    		}
    	})
    }

    render(){
    	const style={
    		backgroundColor:this.state.color
    	} 
        return(
            <div style={style} className="box_container">
            	<ChangeBox color={this.state.color} clickHandle={this.clickHandle}/>
            </div>
        );
    }
}

export default App