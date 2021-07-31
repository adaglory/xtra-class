import Home from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
