import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ImagesContainer from './components/Images/ImagesContainer';
import LoginForm from './components/Users/LoginForm';
import UserAccountPage from './components/Users/UserAccountPage';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={LoginForm} exact={true}/>
            <Route path="/images" component={ImagesContainer} />
            <Route path="/account" component={UserAccountPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
