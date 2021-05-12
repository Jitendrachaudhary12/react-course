import React,{useState} from 'react';
function Listings() {
	    const user=[
	    	{name:'jeet',age:'26',address:'Patila'},
	    	{name:'jeet1',age:'27'},
	    	{name:'jeet2',age:'28'},
	    	{name:'jeet3',age:'29'},

	    	];
        
         return(
         	<div>
         	<h1>User Listing</h1>
         	{
         	   user.map((item,i)=>
         	   <div key={i}>
         	   <span>{item.name}</span>
         	   <span>{"  "}</span>
         	   <span>{item.age}</span>
         	   <span>{"  "}</span>
         	   <span>{item.address}</span>

         	   </div>)
         	}
         	</div>
         	)
}

export default Listings;