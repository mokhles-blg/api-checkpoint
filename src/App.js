import React from "react";
// { useState }
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import UserList from "./Components/UserList/UserList";
import User from "./Components/User/User";
// import Admin from "./Components/Admin/Admin";
// import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import error from "./Assets/404.jpg";

function App() {
  // const [isAuth, setIsAuth] = useState(false);

  // const login = () => setIsAuth(true);
  // const logout = () => setIsAuth(false);

  return (
    <div className="App">
      <Navbar />
      {/* isAuth={isAuth} login={login} logout={logout} */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UserList} />
        <Route path="/users/user/:id" component={User} />
        {/* <PrivateRoute
          path="/admin"
          component={Admin}
          isAuth={isAuth}
          message="hello test props"
        /> */}
        <Route
          path="/*"
          component={() => (
            <img src={error} alt="error" style={{ width: "40%" }} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
