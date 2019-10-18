import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ImageContainer from './components/Images/ImageContainer';
import ImagesContainer from './components/Images/ImagesContainer';
import LoginForm from './components/Users/LoginForm';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" component={LoginForm} exact={true}/>
              <Route path="/images/:user_id" component={ImagesContainer} />
              <Route path="/image/:id" component={ImageContainer} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
