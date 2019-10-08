import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from '../components/Header';
import ImageUploadPage from '../components/Images/ImageUploadPage';
import UserAccountPage from '../components/Users/UserAccountPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ImageUploadPage} exact={true}/>
        <Route path="/account" component={UserAccountPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
