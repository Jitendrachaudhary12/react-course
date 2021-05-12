import React,{useState} from 'react';
function Eventt() {
	    const [val,setVal]=useState("jeet");
         const test=(e)=>
         {
         	console.warn("test Function",e.target.value);
         	setVal(e.target.value);
         }
         return(
         	<div>
         	<h1>Events Jeet You are working good</h1>
         	<input type="text" value={val} onChange={test} />
             <button onClick={()=>alert(val)}>Click Me</button>
         	</div>
         	)
}

export default Eventt;