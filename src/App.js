import './App.css';
import React from 'react';
import Home from './Component/Home'
import Movie from './Component/Movie'
import Test from './Component/Test'
import Logo from './Component/logo.png';
import HomeB from './Component/HomeB.png'

import { FormControl, Form,Card , Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
 <div>
<Router>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item >
          
              <img src={Logo} alt='website logo' style={{ width: '13rem' }} />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="back" href="/Home"> <img  className="imgback" src={HomeB} style={{ width: '3rem' }}/> </Nav.Link>
            </Nav.Item>
          </Nav> 

          <Switch>
              <Route path="/Home">
                <Home />
              </Route>
            
              <Route path="/Test">
                <Test />
              </Route>

              <Route path="/Movie">
                <Movie /> 
              </Route> 
            </Switch>
</Router>

<footer className="footer">
<p>CONTACT US</p>
     <p> Whalghamdi@hotmail.com</p>
     <p> Saudi Arabia </p>

</footer>
  

</div>
  );
}

export default App;


