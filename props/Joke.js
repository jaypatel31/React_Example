import React from "react";

const Joke = (prop) => {
    console.log(prop)
    return (
       	<div>
            <h3 style={{display: prop.question ? "block" : "none"}}>Question: {prop.question}</h3>
            <h3>Answer: {prop.punchLine}</h3>
           
        </div>
    );
}

export default Joke;