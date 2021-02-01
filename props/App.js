import React from "react";
import Joke from "./Joke"
const App = () => {
    return (
        <div className="joke_container">
            <Joke 
                conant= {{question:"Question-1", punchline:"PunchLine-1"}}
            />
             <Joke 
                conant= {{question:"Question-2", punchline:"PunchLine-2"}}
            />
             <Joke 
                conant= {{question:"Question-3", punchline:"PunchLine-3"}}
            />
             <Joke 
                conant= {{question:"Question-4", punchline:"PunchLine-4"}}
            />
             <Joke 
                conant= {{ punchline:"PunchLine-5"}}
            />
        </div>
    );
}

export default App;