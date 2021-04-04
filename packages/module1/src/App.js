import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import About from './Screens/About/About';

export default () => {
  return (
    <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/about" component={About} />
          </Switch>
        </BrowserRouter>
    </div>
  );
};
