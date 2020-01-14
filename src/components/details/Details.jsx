import React, { Component } from "react";
import axios from "axios";
import {withRouter} from 'react-router-dom'

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '026ac304',
  apiSecret: 'ZwfvSATYPhlLtlZ1',
});

const from = 'Nexmo';
const to = '966506030008';


//nexmo.message.sendSms(from, to, text);

class Details extends Component {
  


  state = {
    ingredients: [],
    recipeId: this.props.match.params.id,
    text: ""

  }


  componentDidMount() {
    axios.get(`https://api.spoonacular.com/recipes/${this.props.match.params.id}/ingredientWidget.json?apiKey=01773742fd534e77967f3c3e59b214e6`)
      .then(res => {
        const ingredients = res.data.ingredients;
        let text = ""
        for (let index = 0; index < ingredients.length; index++) {
          const element = ingredients[index].name ;
          text += element + " * "
          
        }
    
        this.setState({ ingredients, text });

      })
      
  }

  render() {
    console.log(this.props)
    return (
      <div>
      {/* <ul>
        { this.state.ingredients.map(ingredient => <li>{ingredient.name}</li>)}
      </ul> */}
      
        <Card style={{ width: "50rem" }}>
          <Card.Img
            variant="top"
            src={`https://spoonacular.com/recipeImages/${this.state.recipeId}-636x393.jpg`}
            />
          <Card.Body>
            <Card.Title>{this.props.location.name.title}</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
          <h3>Ingredients</h3>
          <ListGroup className="list-group-flush">
          { 
            this.state.ingredients.map(ingredient =>
            // <ListGroupItem>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup.Prepend>
                {/* <InputGroup.Text id="basic-addon1">{ingredient.name}</InputGroup.Text> */}
              <FormControl aria-label="Text input with checkbox" value={ingredient.name}/>
              </InputGroup>
            // </ListGroupItem>
              
          )}
              
              
          </ListGroup>
          <Card.Body>
            <Card.Link href="#" onClick={() => nexmo.message.sendSms(from, to, this.state.text)}>Send SMS</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(Details);
