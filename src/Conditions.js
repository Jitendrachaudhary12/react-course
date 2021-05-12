import React,{useState} from 'react';
function Conditions() {
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
         	  user.length==5?<div>Yes, this is right</div>:<div>No length show</div>
         	}
         	</div>
         	)
}

export default Conditions;