import React, { useReact } from "react"

const App = () =>{
	const [ count, setCount ] = useReact(0);
	function increment(){
		setCount(prevState => prevState + 1);
	}
	return(
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>Increment</button>
		</div>
	);
}

export default App1