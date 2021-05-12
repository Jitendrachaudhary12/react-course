import React from 'react'
class About extends React.Component{
	constructor()
	{
		super();
		console.warn("constructor");
		this.state={
			name:'Jeet',
			age:'25'
		}
	}
	componentDidMount(){
		console.warn("constructor componentDidMount");
		console.warn("props mount",this.props.namee)


	}
	componentDidUpdate(){
		console.warn("constructor componentDidUpdate");
		console.warn("props update",this.props.namee)

		alert("Data Updated");

	}
	
	render(){
		console.warn("render");
		return(<div>
			<h1>About page Component</h1>
			<h2>{this.state.name},{this.state.age}</h2>
			<h3>{this.props.namee}</h3>
			<button onClick={()=>{this.setState({name:'Jeet Chaudhary'})}}>Update state</button>
			</div>)
	}
}

export default About;