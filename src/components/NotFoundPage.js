import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <div>
      <h1>404</h1>
      <h2>Doh! This page doesn't exist.</h2>
      <Link to="/">Back to Home</Link>
    </div>
    <img src="https://corgimedia.s3.amazonaws.com/wp-content/uploads/2017/12/homer-computer-doh.jpg" alt="404" />
  </div>
);

export default NotFoundPage;
