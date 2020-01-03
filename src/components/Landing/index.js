import React from 'react';
import {Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Landing = () => (
  <div className="container">
    <h1>Landing Page</h1>
    <p>You are seeing this page because you are not logged in. Please sign in by clicking 
      &nbsp; 
      <Button outline color="info">
        <Link to={ROUTES.SIGN_IN}>
          here
        </Link>
      </Button> or using the "Sign In" link above</p>
    <p>
      If you are logged in and are seeing this page please click
      &nbsp;
      <Link to={ROUTES.SIGN_IN}>
          here
      </Link>
    </p>
  </div>
);

export default Landing;