import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import CardDeck from "react-bootstrap/CardDeck";


class Recipe extends Component {
  render() {
    return (
      <div>
        {/* <h2>Title: {this.props.recipe.title}</h2> */}

        <img src="https://spoonacular.com/recipeImages/613283-636x393.jpg"></img>
        <br />
        <ButtonToolbar className="custom-btn-toolbar">
          <Button>Home</Button>
          <Button>About</Button>
          <Button>Users</Button>
        </ButtonToolbar>

        <CardDeck>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://spoonacular.com/recipeImages/613283-636x393.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://spoonacular.com/recipeImages/613283-636x393.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://spoonacular.com/recipeImages/613283-636x393.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Recipe;
