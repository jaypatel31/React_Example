import React from "react";

const ChangeBox = (prop) => {
	return (
		<div className="box">
			<button onClick={() => prop.clickHandle()}>Change Color</button>
			<p style={{color:prop.color}} className="colorCode">{prop.color}</p>
		</div>
	);
}

export default ChangeBox;