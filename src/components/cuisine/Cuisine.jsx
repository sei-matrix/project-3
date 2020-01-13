import React, { Component } from 'react';

class Cuisine extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div>
                <div className='cuisine'>
                 <h1> {this.props.name}</h1>
                 <img src={`https://spoonacular.com/recipeImages/${this.props.id}-636x393.jpg`} />
                
                </div>
            </div>
         );
    }
}
 
export default Cuisine;