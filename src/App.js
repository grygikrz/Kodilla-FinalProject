import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainLayout } from "./components/MainLayout";
import { Root } from "./components/Root";
import { NoMatch } from "./components/NoMatch";
import { ProductPage } from "./components/ProductPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Root} />
            <Route exact path={"/product"} component={ProductPage} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
        </BrowserRouter>
          );
    }
}
export default App;
