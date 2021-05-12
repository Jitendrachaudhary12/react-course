import React,{useEffect,useState} from 'react';
function Contact(props) {
   
    const [name,setName]=useState("Jeet");
    const [age,setAge]=useState(25);
	useEffect(()=>{
		console.warn("Hello From Hooks");
	},[age])
	let data="Contact Us Component JSX"
	return(
            <div>
              <h1>{data}</h1>
              <h1>{name}</h1>
              <h1>{age}</h1>
              <h1>{props.datas}</h1>
              <button onClick={()=>setAge(52)}>Update Age</button>
              <button onClick={()=>setName("Jeet Chaudhary")}>Update Name</button>
            </div>
		)
}

export default Contact