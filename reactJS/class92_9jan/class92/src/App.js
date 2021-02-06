import { Layout } from "./components";
import { Main } from "./components"
import { Contact } from "./screens"
import { Shop } from "./screens"
import { News } from "./screens"
import { Login } from "./screens"
import { Offers } from "./screens"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Main>
            <Switch>
              <Route exact path="/">
                <News />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/shop">
                <Shop />
              </Route>
              <Route path="/offers">
                <Offers />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Layout>
      </div>
    </Router>
  );
};

export default App;