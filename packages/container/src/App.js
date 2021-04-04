import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Home from "./Screens/Home/Home";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


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

</Switch>
<Footer />
    </div>

    </Router>
  );
}

export default App;
