import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WineTasting from "./Components/WineTasting/WineTasting";
import WineList from "./Components/WineList/WineList";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import UserComponent from "./Components/User/User";

export default function App() {

  const [user, setUser] = useState({ mail: '', password: '', id: 1 });
  const [userValidated, setUserValidated] = useState(false);

  function loginUser(mail: string, password: string, userId: number, validated: boolean) {
    setUser({ mail: mail, password: password, id: userId });
    setUserValidated(validated)
  }

  return (
    <Router>
      {userValidated ? (<div className="grid__container">
        <nav className="navbar sticky">
          <div className='underline__navbar'>
            <Link to="/" className='link__navbar__header'>Virtual Wine Tasting</Link>
          </div>
          <div className='underline__navbar'>
            <Link to="/" className='link__navbar'>Home</Link>
          </div>
          <div className='underline__navbar'>
            <Link to="/tasting" className='link__navbar'>Start Wine Tasting</Link>
          </div>
          <div className='underline__navbar'>
            <Link to="/winelist" className='link__navbar'>Your Personal Wine List</Link>
          </div>
          <div className='underline__navbar'>
            <Link to="/user" className='link__navbar'>user</Link>
          </div>
        </nav>
        <div className="main">
          <Switch>
            <Route path="/tasting">
              <WineTasting user={user} />
            </Route>
            <Route path="/winelist"><WineList user={user} /></Route>
            <Route path="/user">{<UserComponent user={user} />}</Route>
            <Route path="/">{<Home />}</Route>
          </Switch>
        </div>
      </div>) : (<div className="login__container"><Login loginUser={loginUser} /></div>)}
    </Router>
  );
}
