import React, { Component } from "react";
import Cuisine from "./components/cuisine/Cuisine";
import { Route } from "react-router-dom";
import axios from "axios";
import Recipes from "./components/recipes/Recipes";
import Details from "./components/details/Details";
import Nav from "./components/Navbar";
import Header from "./components/recipe/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./App.css";

class App extends Component {
  state = {
    cuisineName: [
      "Japanese",
      "Mexican",
      "Thai",
      "French",
      "Italian",
      "Chinese",
      "Greek",
      "American"
    ],
    offsets: [5, 0, 0, 5, 0, 5, 0, 4],
    cuisineInfo: []
  };

  componentDidMount() {
    let cuisine = "";
    let cuisineInfoCpy = [...this.state.cuisineInfo];

    this.state.cuisineName.forEach((c, index) => {
      cuisine = c;
      let url = `https://api.spoonacular.com/recipes/search?apiKey=06597fc832594e629139cfc88e709de4&cuisine=${cuisine}&offset=${this.state.offsets[index]}&number=1`;
      axios
        .get(url)
        .then(obj => {
          cuisine = c;
          cuisineInfoCpy.push(
            <Cuisine key={index} name={cuisine} id={obj.data.results[0].id} />
          );
        })
        .then(() => {
          this.setState({ cuisineInfo: cuisineInfoCpy });
        });
    });

    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <Route path="/" component={Header} />
        <Route
          path="/"
          exact
          render={() => (
            <Container>
              <Row>{this.state.cuisineInfo}</Row>
            </Container>
          )}
        />
        <Route path="/cuisines/:id" exact component={Recipes} />
        <Route path="/recipes/:id" exact component={Details} />
      </div>
    );
  }
}

export default App;
