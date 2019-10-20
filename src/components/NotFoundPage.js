import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  location: PropTypes.object.isRequired,
};

export default function PageNotFound({ location }) {
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found - the path, {location.pathname},
      did not match any React Router routes.</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

PageNotFound.propTypes = propTypes;
