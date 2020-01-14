import React, { Component } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import CardDeck from "react-bootstrap/CardDeck";

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '026ac304',
  apiSecret: 'ZwfvSATYPhlLtlZ1',
});

const from = 'Nexmo';
const to = '966506030008';
const text = 'Hello from Nexmo';

//nexmo.message.sendSms(from, to, text);

class Details extends Component {
  render() {
    return (
      <div>
        <h2>Title: Details{this.props.name}</h2>

        <Card style={{ width: "50rem" }}>
          <Card.Img
            variant="top"
            src="https://spoonacular.com/recipeImages/613283-636x393.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Details;
