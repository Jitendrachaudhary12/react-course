import React,{useState} from 'react';

import About from './About';
import Contact from './Contact';
import Eventt from './Eventt';
import Listings from './Listings';
import Conditions from './Conditions';
import Frag from './Frag';
import Booot from './Booot';
import CreateUser from './CreateUser';
import Home from './Home';
import './App.css'
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom' 
import {Navbar,Nav} from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
       <Router>
          <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/booot">UserList</Link><br/></Nav.Link>
            <Nav.Link><Link to="/createUser">Create User</Link></Nav.Link>
            <Nav.Link><Link to="/createUser12">Contact</Link></Nav.Link>
          </Nav>
          </Navbar>
     <Switch>
             <Route path="/about">
                <About namee="jeeeeet"/>
             </Route>
             <Route path="/booot">
                <Booot/>
             </Route>
             <Route path="/createUser">
                <CreateUser/>
             </Route>
             <Route path="/createUser12">
                <Contact datas="Suman chaudhary" />
             </Route>
             <Route path="/">
                <Home />
             </Route>
     </Switch>

    </Router>
    </div>
  )
}

export default App;
