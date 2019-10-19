import React from 'react';
import './styles/App.css';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ImagesContainer from './components/Images/ImagesContainer';
import LoginForm from './components/Users/LoginForm';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <BrowserRouter basename='/'>
          <Header />
          <Switch>
            <Route path="/" component={LoginForm} exact={true}/>
            <Route path="/images/:user_id" component={ImagesContainer} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </HashRouter>
  );
};

export default App;
