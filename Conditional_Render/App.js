import React from "react";
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            logged:true
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState(prevState=>{
            return {
                logged: !prevState.logged
            }
           
        })
    }
    render(){
        return(
          <div>
            <h1>User:{this.state.logged?"Logged In":"Logged Out"}</h1>
            <button onClick={this.clickHandler}>{this.state.logged?"Log Out":"Log In"}</button>
          </div>  
        );
    }
}

export default App