//Dependencies
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

//Components
import Header from "../../components/Header/Header";

//Contens
import Interview from "../../pages/Interview/Interview";

class DefaultLayout extends Component {
  state = {
    renderform: true
  };

  //contain routes
  content = () => {
    return (
      <Switch>
        <Route exact path="/" name="Interview" component={Interview} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    );
  };

  render() {
    const { renderform, ButtonToggle } = this.state;
    const principalcontent = renderform ? this.content() : null;
    return (
      <div>
        <Header />
        <div className="main">
          <main className="app-content">
            <div className={`space-8 ${ButtonToggle ? "ml-230" : "ml-0"}`}>
              {principalcontent}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
