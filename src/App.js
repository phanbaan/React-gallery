import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { routes } from "./utils/routes";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
