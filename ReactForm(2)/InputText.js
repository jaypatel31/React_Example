import React from "react";

const InputText = prop =>{
	const value = (prop.name==="gender")?"male":prop.value
	return(
		<div>
			<label>
				<span style={{fontWeight:"bold",fontSize:"20px"}}>{prop.title}</span>
			    <br/>
			    <br/>
				<input 
					type={prop.type} 
					name={prop.name} 
					value={value}
					onChange={event=>prop.handleChange(event)}
				/>
			</label>
		</div>
	);
}

export default InputText;