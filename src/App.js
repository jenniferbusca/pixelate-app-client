import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
