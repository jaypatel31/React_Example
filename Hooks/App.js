import React, { useReact } from "react"

const App = () =>{
	const [ answer ] = useReact("Yessss");
	return(
		<div>
			<h1>Hey! This is React Hooks ? {answer}</h1>
		</div>
	);
}

export default App