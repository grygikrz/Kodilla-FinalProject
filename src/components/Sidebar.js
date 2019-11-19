import React from "react";
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'

export const Sidebar = props => {
    return (
      <div>
        <h4>Sort by <Badge variant="success">Product name A-Z</Badge></h4>
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>Product name A-Z</ListGroup.Item>
          <ListGroup.Item as="li">Product name Z-A</ListGroup.Item>
          <ListGroup.Item as="li" disabled>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item as="li">Price descending</ListGroup.Item>
          <ListGroup.Item as="li">Price ascending</ListGroup.Item>
        </ListGroup>
      </div>
    );
};
