import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component{
    Header(){
        return(
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        );
    }
    Greeting(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
    render(){
        return(
          <div>
            {this.Header()}
            {this.Greeting()}
          </div>  
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"))
