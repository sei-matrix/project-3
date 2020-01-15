import React, { Component } from 'react';

class Checklist extends Component {
   
    handleChange = () => {
        this.props.chosen(this.props.name)
        }
    
    render() { 
     
        return ( 
          
             <span>
        <input type="checkbox" onChange={this.handleChange}/>
        {this.props.name}
        </span>  
         );
    }
}
 
export default Checklist;