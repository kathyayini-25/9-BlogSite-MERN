import Home from "./pages/home/Home";
import TopBar from './components/topbar/TopBar';
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import Setting from './pages/settings/Setting';
//import Header from './components/Header/Header';
import Single from "./pages/single/Single";
import Write from './pages/write/Write';
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context)
  return (
   <Router>
    <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/sidebar">
          <Sidebar />
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Login />}
        </Route>
        <Route path="/setting">
          {user ? <Setting /> : <Login />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
