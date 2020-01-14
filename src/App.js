import React, { Component } from "react";
import Cuisine from "./components/cuisine/Cuisine";
import { Route } from "react-router-dom";
import axios from "axios";
import Recipes from "./components/recipes/Recipes";
import Details from "./components/details/Details";
import Nav from './components/Navbar'
import Header from './components/recipe/Header'
import "./App.css";

class App extends Component {
  state = {
    cuisineName: [
      "Japanese",
      "Mexican",
      "Thai",
      "French",
      "Italian",
      "Chinese"
    ],
    offsets: [5, 0, 0, 5, 0, 5],
    cuisineInfo: []
  };

  componentDidMount() {
    let cuisine = "";
    let cuisineInfoCpy = [...this.state.cuisineInfo];
    this.state.cuisineName.forEach((c, index) => {
      cuisine = c;
      let url = `https://api.spoonacular.com/recipes/search?apiKey=01773742fd534e77967f3c3e59b214e6&cuisine=${cuisine}&offset=${this.state.offsets[index]}&number=1`;
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
        <Route path="/" exact render={() => this.state.cuisineInfo} />
        <Route path="/cuisines/:id" exact component={Recipes} />
        <Route path="/recipe/:id" exact component={Details} />
      </div>
    );
  }
}

export default App;
