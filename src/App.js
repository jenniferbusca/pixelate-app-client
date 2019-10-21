import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ImagesContainer from './components/Images/ImagesContainer';
import LoginForm from './components/Users/LoginForm';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path="/" component={LoginForm} exact={true}/>
          <Route path="/images/:user_id" component={ImagesContainer} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
