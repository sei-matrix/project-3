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
    offsets:[5,0,0,5,0,5],
    cuisineInfo: [],
    recipes: []
  };

  onCuisinechoice(name){

    let recipesCpy = this.state.recipes
    let url = `https://api.spoonacular.com/recipes/search?apiKey=01773742fd534e77967f3c3e59b214e6&cuisine=${name}&offset=${Math.floor(Math.random()*50)}&number=10`;
    axios.get(url).then(res=>{
      res.data.results.forEach(recipe=>{
        recipesCpy.push(<Recipe recipe={recipe} />)
      })
   })
          .then(()=>{
            this.setState({recipes: recipesCpy})
          })

          return (this.state.recipes)
  }

  componentDidMount() {
    let cuisine = "";
    let cuisineInfoCpy = [...this.state.cuisineInfo];
    this.state.cuisineName.forEach((c,index) => {
      cuisine = c;
      let url = `https://api.spoonacular.com/recipes/search?apiKey=01773742fd534e77967f3c3e59b214e6&cuisine=${cuisine}&offset=${this.state.offsets[index]}&number=1`;
      axios
        .get(url)
        .then(obj => {
          cuisine = c;
          cuisineInfoCpy.push(
            <Cuisine
              key={index}
              name={cuisine}
              id={obj.data.results[0].id}
            />
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
        <Route path="/" exact render={() => this.state.cuisineInfo} />
        <Route path="/cuisines/:id" exact component={Recipe}  />
      </div>
    );
  }
}

export default App;
