import React from "react";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn: false
        }
    }
    render(){
        let currentState = (this.state.isLoggedIn)?"in":"out";
        return(
            <div>
                <h1>You are currently logged {currentState}</h1>
            </div>
        );
    }
}

export default App