import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardText} from 'reactstrap';

const propTypes = {
  location: PropTypes.object.isRequired,
};

export default function PageNotFound({ location }) {
  return (
    <Card className="not-found">
      <CardHeader>404 PAGE NOT FOUND</CardHeader>
      <CardBody>
        <CardText>
          Page not found - the path, {location.pathname},
          did not match any React Router routes.
        </CardText>
        <Link to="/">Back to Home</Link>
      </CardBody>
    </Card>
  );
}


PageNotFound.propTypes = propTypes;
