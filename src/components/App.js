import React from "react";
import { Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import NavBar from "./NavBar";
import Messages from "./Messages";
import Signup from "./Signup";


function App() {
  return (
    <div>
      <NavBar/>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/login'>
        <Login/>
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
      <Route exact path="/messages">
        <Messages />
      </Route>
    </div>
  );
}

export default App; 