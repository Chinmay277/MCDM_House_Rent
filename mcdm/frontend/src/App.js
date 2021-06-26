import { ToastContainer, toast } from "react-toastify";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Home from "./components/home";
import Register from "./components/register";
import UserProfile from "./components/userProfile";
import Header from "./components/header";
import SubmitProperty from "./components/submitProperty";
import HeaderLog from "./components/header_loggedin";
import Properties from "./Page/Properties/Properties";
import SingleProperty from "./Page/singleProperty/SingleProperty";
import Contact from "./Page/Conatct/Contact";

import { useEffect } from "react";
import { useState } from "react";
function App() {
  const history = useHistory();
  const [SinglePropertyDatashow, setSinglePropertyDatashow] = useState(true);
  const [SinglePropertyData, setSinglePropertyData] = useState({});

  window.au = false;
  useEffect(() => {});

  const setDataofProperty = (e) => {
    debugger;
    setSinglePropertyData(e);
  };
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/properties">
            <Properties setSinglePropertyData={(e) => setDataofProperty(e)} />
          </Route>

          <Route exact path="/properties/information">
            <SingleProperty SinglePropertyData={SinglePropertyData} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={5000} />
      </Router>
    </div>
  );
}

export default App;
