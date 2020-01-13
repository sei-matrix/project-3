import React, { Component } from 'react';

class Checklist extends Component {
    state = { 
        ingredient: false
     }
    handleChange = e => {
        const key = e.target.name
        this.setState( ({...copyState}) => {
            copyState[key] = !copyState[key]
            return copyState
        })
    }
    render() { 
      console.log(this.state)
        return ( 
          
                
        <input type="checkbox" name="ingredient" defaultChecked={this.state.ingredient} onChange={this.handleChange}/>

         );
    }
}
 
export default Checklist;