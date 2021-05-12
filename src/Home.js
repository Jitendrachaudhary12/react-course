import React from 'react'
import About from './About';
import Contact from './Contact';
import Eventt from './Eventt';
import Listings from './Listings';
import Conditions from './Conditions';
import Frag from './Frag';
import Booot from './Booot';
import CreateUser from './CreateUser';
function Home() {

	return (
    <div className="App">
         <h1>Home Component</h1>
			 <Eventt/>
			<Listings />
			<Conditions />
    </div>
  )
}

export default Home;
