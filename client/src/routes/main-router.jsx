import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import codesTable from '../components/codes/codes-table';

const MainRouter = () => {
  return (
    <React-Fragment>
      <Switch>
        <Route path="/data" component={codesTable} />
        <Redirect path="/" exact to="/data" />
      </Switch>
    </React-Fragment>
  );
};

export default MainRouter;
