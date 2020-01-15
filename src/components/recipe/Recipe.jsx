import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";

class Recipe extends Component {
  render() {
    let recipeName = this.props.recipe.title
    let recipeId = this.props.recipe.id
    return (
      <div>
      
          {/* <Link to={`/recipe/${recipeId}`}> */}
          <Link to={`/recipes/${recipeId}`}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`https://spoonacular.com/recipeImages/${recipeId}-636x393.jpg`}
            />
            <Card.Body>
              <Card.Title>{recipeName}</Card.Title>
            </Card.Body>
          </Card>
          </Link>
      </div>
    );
  }
}

export default Recipe;
