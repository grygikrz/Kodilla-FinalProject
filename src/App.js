import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainLayout } from "./components/MainLayout";
import { AdminLayout } from "./components/AdminLayout/";
import Root from "./components/Root";
import { NoMatch } from "./components/NoMatch";
import ProductPage from "./components/ProductPage";
import AdminPage from "./components/AdminPage";

function RouteWithLayout({component: Component, layout: Layout, ...rest }){
  return (
    <Route {...rest} render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )} />
  );
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
              <RouteWithLayout layout={MainLayout} exact path="/" component={Root}/>
              <RouteWithLayout layout={MainLayout} exact path="/product" component={ProductPage}/>
              <RouteWithLayout layout={MainLayout} exact path="/product/:productid" component={ProductPage}/>
              <RouteWithLayout layout={AdminLayout} exact path="/admin" component={AdminPage}/>
              <RouteWithLayout layout={MainLayout} component={NoMatch}/>
          </Switch>
      </BrowserRouter>
          );
    }
}
export default App;
