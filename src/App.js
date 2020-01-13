import React, { Component } from "react";
import Cuisine from "./components/cuisine/Cuisine";
import { Route } from "react-router-dom";
import axios from "axios";
import Recipe from "./components/recipe/Recipe";
import Details from "./components/details/Details";
import "./App.css";

class App extends Component {
  state = {
    cuisineName: [
      "Japanese",
      "Maxican",
      "Thai",
      "French",
      "Italian",
      "Chinese"
    ],
    cuisineInfo: [],
    cuisineCard: []
  };

  componentDidMount() {
    let cuisine = "";
    let cuisineInfoCpy = [...this.state.cuisineInfo];
    this.state.cuisineName.forEach(c => {
      cuisine = c;
      let url = `https://api.spoonacular.com/recipes/search?apiKey=01773742fd534e77967f3c3e59b214e6&cuisine=${cuisine}&offset=0&number=1`;
      axios
        .get(url)
        .then(obj => {
          cuisine = c;
          cuisineInfoCpy.push(
            <Cuisine
              key={obj.data.results[0].id}
              name={cuisine}
              id={obj.data.results[0].id}
            />
          );
        })
        .then(() => {
          this.setState({ cuisineInfo: cuisineInfoCpy });
        });
    });

    console.log(this.state.cuisineInfo);
  }

  render() {
    return (
      <div className="App">
        <Route path="/" exact render={() => this.state.cuisineInfo} />
      </div>
    );
  }
}

export default App;
