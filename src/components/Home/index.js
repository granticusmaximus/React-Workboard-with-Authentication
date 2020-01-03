import React from 'react';
import { withAuthorization } from '../Session';
import { ListGroup, ListGroupItem } from 'reactstrap';

const HomePage = () => (
  <div className="container">
    <h1>Home Page</h1>
    <p>In future interations of this application, you will see the following on this page:</p>
    <div className="cont-box">
      <ListGroup>
        <ListGroupItem color="success">Boards you are assigned too</ListGroupItem>
        <ListGroupItem color="secondary">Tasks you are assigned too</ListGroupItem>
        <ListGroupItem color="success">Follow ups on tasks you have assigned</ListGroupItem>
        <ListGroupItem color="secondary">Previous/Current Sprint Velocity Charts</ListGroupItem>
        <ListGroupItem color="success">Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);