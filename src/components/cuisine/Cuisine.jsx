import React, { Component } from 'react';

class Cuisine extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className='csin'>
                 <h1> {this.props.name}</h1>
                
                 <img src='https://spoonacular.com/recipeImages/${this.props.img.id}-636x393.jpg' />

                </div>
            </div>
         );
    }
}
 
export default Cuisine;