import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Dashboard, Products, Users } from "./Screens";

const App = () => {


  return (
    <Router>
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/users" component={Users} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>

  );
};

export default App;
