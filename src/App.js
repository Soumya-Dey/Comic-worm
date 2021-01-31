import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";
import Alert from "./components/layouts/Alert";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Landing} />

            <section className="container">
              <Alert />
              <Switch>
                {/* <Route exact path="/register" component={Register} /> */}
              </Switch>
            </section>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
