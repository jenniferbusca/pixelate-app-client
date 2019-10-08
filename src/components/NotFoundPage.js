import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>404</h1>
    <h2>Sorry, this page doesn't exist.</h2>
    <Link to="/">Back to Home</Link>
  </div>
);

export default NotFoundPage;
