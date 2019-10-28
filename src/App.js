import React from 'react';
import { 
  Route, 
  BrowserRouter, 
  Switch,
  NavLink
} from 'react-router-dom'; 
import './App.css';
import Home from "./Home";
import History from "./History";

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavLink exact to="/"> Home </NavLink> |
      <NavLink to="/our-history"> History </NavLink>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/our-history" component={History}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default App;