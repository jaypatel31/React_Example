import React from "react";


class MemeGenerator extends React.Component{
	constructor(){
		super();
		this.state = {
			img:"http://i.imgflip.com/1bij.jpg",
			upperText:"",
			lowerText:"",
			allMemeImgs:[],
			imgwidth:"",
			imgheight:""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

	handleChange(event){
		const {value, name} = event.target;
		this.setState({[name]:value})
		
		   
		

	}

	handleClick(event){
		event.preventDefault();
		const randomNumber = Math.floor(Math.random()*100);
		this.setState({img:this.state.allMemeImgs[randomNumber].url})
	}
	render(){
		return(
			<div>
				<form>
					<input type="text" name="upperText" value={this.state.upperText} onChange={this.handleChange}/>
					<input type="text" name="lowerText" value={this.state.lowerText} onChange={this.handleChange}/>
					<button onClick={this.handleClick}>Generato Random Image</button>
				</form>
				<div id="img_container">
					<img  src={this.state.img} alt="meme"/>
					<canvas id="canvas" />
					<h2 id="upperText">{this.state.upperText}</h2>
					<h2 id="lowerText">{this.state.lowerText}</h2>
				</div>
			</div>
		);
	}
}

export default MemeGenerator;