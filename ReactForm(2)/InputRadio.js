import React from "react";

const InputRadio = (prop) =>{
	return(
		<div>
			<label>
				<span style={{fontWeight:"bold",fontSize:"20px"}}>{prop.title}</span>
			    <br/>
			    <br/>
			    Male: 
				<input 
					type={prop.type} 
					name={prop.name} 
					value="male"
					checked={prop.value==="male"}
					onChange={event=>prop.handleChange(event)}
				/>
				FeMale: 
				<input 
					type={prop.type} 
					name={prop.name} 
					value="female"
					checked={prop.value==="female"}
					onChange={event=>prop.handleChange(event)}
				/>
			</label>
		</div>
	);
}

export default InputRadio;