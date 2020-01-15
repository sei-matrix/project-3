import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Checklist from '../checklist/Checklist'

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./Details.css";

const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  apiKey: "026ac304",
  apiSecret: "ZwfvSATYPhlLtlZ1",
});

const from = "Nexmo";
// const to = "966506030008";

//nexmo.message.sendSms(from, to, text);

class Details extends Component {
  state = {
    ingredients: [],
    available: [],
    recipeId: this.props.match.params.id,
    text: "",
    title: "",
    instructions: "",
  };

  boxChecked = (name)=>{
    let text = this.state.text
    let availability = [...this.state.available]
    let ingredientIndex = this.state.ingredients.find(ingredient=> ingredient==name)
    availability[ingredientIndex] = !availability[ingredientIndex]
    text += name + "\n";
    this.setState({available: availability, text})
  }


  componentDidMount() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${this.props.match.params.id}/information?apiKey=08df91330e654056a7a82f23569dec0a`
      )
      .then(res => {
        const ingredients = res.data.extendedIngredients;
        let title = res.data.title;
        let instructions = res.data.instructions;
        let available = []
        for (let index = 0; index < ingredients.length; index++) {
          const element = ingredients[index].name;
          available.push(false)
        }

        this.setState({ ingredients, title, instructions });
      });
  }

  render() {
    console.log(this.props);
    return (
      <div className="container-card">
        <Card style={{ width: "50rem" }}>
          <Card.Img
            variant="top"
            src={`https://spoonacular.com/recipeImages/${this.state.recipeId}-636x393.jpg`}
          />
          <Card.Body>
            <Card.Title>{this.state.title}</Card.Title>
            <Card.Text>{this.state.instructions}</Card.Text>
          </Card.Body>
          <h3>Ingredients</h3>
          <ListGroup className="list-group-flush">
            {this.state.ingredients.map(
              ingredient => (
                // <ListGroupItem>
                <Checklist chosen={this.boxChecked} name={ingredient.name} />
              )
              // </ListGroupItem>
            )}
          </ListGroup>
          <Card.Footer>
          <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">+966</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      onChange ={this.handleChange}
      placeholder="Mobile Number"
      aria-label="mobile"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
            <Card.Link
              href="#"
              onClick={() => nexmo.message.sendSms(from, '966' + this.state.mobile, this.state.text)}
            >
              Send SMS
            </Card.Link>
          </Card.Footer>
        </Card>

      </div>
    );
  }
}

export default withRouter(Details);
