import React, { Component } from 'react'
import Cuisine from './components/cuisine/Cuisine'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import axios from 'axios'
import './App.css';

class App extends Component {
  state ={
      cuisineName: ["Japanese","Maxican","Thai","French","Italian","Chinese"],
      cuisineInfo: [],
      cuisineCard: []
  }

  componentDidMount(){
    let cuisine = ""
    let url = `https://api.spoonacular.com/recipes/search?apiKey=01773742fd534e77967f3c3e59b214e6&cuisine=${cuisine}&offset=0&number=1`
    this.state.cuisineName.forEach(c=>{
      cuisine = c
      axios.get(url).then(obj =>{
      let cuisineInfoCpy = this.state.cuisineInfo
      cuisineInfoCpy.push(obj.data.results[0])
      }
      )
    })
  }

  render(){
    return (
      <div className="App">
        <Router>
        {/* <Route path="/" Component={} /> */}
        <Route path="/" exact render={()=>{this.state.cuisineInfo.forEach((c,index)=>{
          return (<Cuisine  name={this.state.cuisineName[index]} id={c.id} />)
        })}} />
        </Router>
      </div>
    )
  }
}

export default App;
