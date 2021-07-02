import React, { Suspense, useEffect } from 'react';
import { Switch, Route as ReactDOMRoute } from 'react-router-dom';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <ReactDOMRoute path="/" exact component={Home} />
      <Suspense fallback={<></>} />
    </Switch>
  );
};

export default Routes;
