//Dependencies
import React, { Component } from 'react';
import { HashRouter as Router, Route,Switch} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

//Assets
import './App.scss';

//Pages
import Login from "./pages/Login/Login";
import Page404 from "./pages/Page404/Page404";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
