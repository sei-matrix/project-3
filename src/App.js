import React, { Component } from "react";
import Cuisine from "./components/cuisine/Cuisine";
import { BrowserRouter as Router } from "react-router-dom";
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
    let cuisineInfoCpy = this.state.cuisineInfo;
    this.state.cuisineName.forEach(c => {
      cuisine = c;
      let url = `https://api.spoonacular.com/recipes/search?apiKey=01773742fd534e77967f3c3e59b214e6&cuisine=${cuisine}&offset=0&number=1`;
      axios.get(url).then(obj => {
        cuisineInfoCpy.push(<Cuisine name={cuisine} />);
      });
    });
    this.setState({ cuisineInfo: cuisineInfoCpy });
    console.log(this.state.cuisineInfo);
  }

  render() {
    return (
      <div className="App">
        <Router>
          {<Route path="/" />}
          <Route path="/" exact render={() => this.state.cuisineInfo} />
        </Router>
        {this.state.cuisineInfo}
      </div>
    );
  }
}

export default App;
