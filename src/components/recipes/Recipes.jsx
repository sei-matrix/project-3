import React, { Component } from 'react';
import Recipe from '../recipe/Recipe'
import axios from 'axios'
import CardDeck from "react-bootstrap/CardDeck";


class Recipes extends Component {
    state = { 
        recipes: []
     }

    componentDidMount() {
        let recipesCpy = []
        let url = `https://api.spoonacular.com/recipes/search?apiKey=06597fc832594e629139cfc88e709de4&cuisine=${this.props.match.params.id}&offset=${Math.floor(Math.random()*50)}&number=12`;
        axios.get(url).then(res=>{
        recipesCpy = res.data.results.map(
            recipe=>
            <Recipe key={recipe.id} recipe={recipe}/>
        )
            

        let recipesCpyAll = <CardDeck> {recipesCpy} </CardDeck>
        this.setState({recipes: recipesCpyAll})
        // console.log(res.data.results[0])
        })
          return (this.state.recipes)
    }
    render() { 
        return ( 
            <div>
                {this.state.recipes}
            </div>
         );
    }
}
 
export default Recipes;