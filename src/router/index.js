import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import ProductListContainer from '../components/products/ProductListContainer';
import SingleProductContainer from '../components/products/SingleProductContainer';
import PageNotFound from '../components/PageNotFound';

const RouterWrapper = () => (
  <Router history={history}>
    <Switch>
      {/* all routes are public */}
      <Route
        key="ProductList"
        path="/"
        exact
        component={ProductListContainer}
      />
      <Route
        key="SingleProduct"
        path="/SingleProduct/:id"
        exact
        component={SingleProductContainer}
      />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default RouterWrapper;
