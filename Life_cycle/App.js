// https://scrimba.com/g/greacthooks
// Uncaught Invariant Violation: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.

import React from "react"
import randomcolor from "randomcolor"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    componentWillMount(){
        console.log("I am Coming")
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Didupdate");
    }
    shouldComponentUpdate(){
        console.log("Do I Update?")
        return true;
    }
    componentWillUnmount(){
        console.log("shuuu")
    }
    render() {
        console.log("Render")
        return (
            <div>
                <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
                <button onClick={this.decrement}>
                    Decrement!
                </button>
            </div>
        )
    }
}

export default App


import React from "react";
import ReactDom from "react-dom";

ReactDom.render(<h1>Namaste World!</h1>,document.getElementById('app'));