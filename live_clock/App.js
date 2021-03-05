import React from "react";
import ParticlesBg from 'particles-bg'

const time=()=>{
	let current_date = new Date();
	let current_time =current_date.toLocaleTimeString();
	let current_hr = current_date.getHours()-(current_date.getHours()>12?12:0);
	let current_min = current_date.getMinutes();
	let current_second = current_date.getSeconds();
	return [current_hr,current_min,current_second];
}
class App extends React.Component{
	constructor(){
		super();
		const [hr,min,sec] = time();
		this.state={
			hr:hr,
			min:min,
			sec:sec
		};
		this.updateTime = this.updateTime.bind(this);
	}

	updateTime(){
		const [hr,min,sec] = time();
		this.setState(()=>{
			return{
				hr:hr,
				min:min,
				sec:sec
			};
		})
	}

	componentDidMount(){
		setInterval(() => {
		  this.updateTime();
		}, 1000);
	}
	
	render(){
		return(
			<div>
			<h1 style={{margin:"auto",textAlign:"center",color:"white"}}>Live Clock</h1>
			<div style={{textAlign:"center",display:"flex",height:"90vh"}}>

				<div className="clock">

					<div className="clock_block">
						<h1>Hr</h1>
						<h1 className="num">{this.state.hr}</h1>
					</div>
					<div className="clock_block">
						<h1>Min</h1>
						<h1 className="num">{this.state.min}</h1>
					</div>
					<div className="clock_block">
						<h1>Sec</h1>
						<h1 className="num">{this.state.sec}</h1>
					</div>
				</div>
				<ParticlesBg type="thick" bg={true} />
			</div>
			</div>
		);
	}
}

export default App