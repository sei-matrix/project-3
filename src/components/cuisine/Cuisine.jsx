import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Cuisine extends Component {
    state = { 

    }
    render() { 
        return ( 
            
            <Link to={`/cuisines/${this.props.name}`}>
                <div className='cuisine'>
                 <h1> {this.props.name}</h1>
                 <img src={`https://spoonacular.com/recipeImages/${this.props.id}-636x393.jpg`} />
                
                </div>
            </Link>
         );
    }
}
 
export default Cuisine;