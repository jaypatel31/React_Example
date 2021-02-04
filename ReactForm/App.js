import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            finalFName:"",
            finalLName:""
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleClick(event){
        this.setState(prevState=>{
            return{
                finalFName:prevState.firstName,
                finalLName:prevState.lastName,
                firstName:"",
                lastName: ""
            }
        });
        event.preventDefault();
    }
    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <br/>
                <input type="submit" name="submitbtn" value="Submit" onClick={this.handleClick}/>
                <h1 style={{fontFamily:"sofia",color:"red"}}>{this.state.finalFName} {this.state.finalLName}</h1>
            </form>
        )
    }
}

export default App
