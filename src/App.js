import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ImagePage from './components/Images/ImagePage';
import ImagesContainer from './components/Images/ImagesContainer';
import LoginForm from './components/Users/LoginForm';
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
            <Route path="/image/:id" component={ImagePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
