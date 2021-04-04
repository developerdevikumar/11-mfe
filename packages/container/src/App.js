import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Home from "./Screens/Home/Home";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import About from "./Screens/About/About";


function App() {
  return (
    <Router>
    <div>
<Header />
<Switch>
<Route exact path="/">
                <Redirect to="/home" />
            </Route>
 <Route exact path='/home' component={Home} />
 <Route exact path='/about' component={About} />

</Switch>
<Footer />
    </div>

    </Router>
  );
}

export default App;
