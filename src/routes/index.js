import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Main from '../pages/Main';
import Order from '../pages/Order';
import Menu from '../pages/Menu';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/order" exact component={Order} />
      <Route path="/menu" exact component={Menu} />
    </Switch>
  );
}
