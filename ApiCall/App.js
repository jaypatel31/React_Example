import React from "react";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
        	isLoading:true,
            name : ""
        }
    }

   componentDidMount(){
   		fetch("https://swapi.dev/api/people/1")
   			.then(response => response.json())
   			.then(data => {
   				this.setState(prevState => {
   					return{
   						isLoading:!prevState.isLoading,
   						name:data.name
   					}
   				})
   				console.log(data)
   			});
   } 

    render(){
        return(
            <div >
            	{(this.state.isLoading)?"Loading..":this.state.name}
            </div>
        );
    }
}

export default App