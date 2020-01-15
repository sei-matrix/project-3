import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


class Cuisine extends Component {
    state = { 

    }
    render() { 
        return ( 

            
            <Link to={`/cuisines/${this.props.name}`}>
                <div className='cuisine'>
                 <h1> {this.props.name}</h1>

            <Col xs={6} md={4}>
            <Image src={`https://spoonacular.com/recipeImages/${this.props.id}-636x393.jpg`} roundedCircle />
            </Col>

                 {/* <img src={`https://spoonacular.com/recipeImages/${this.props.id}-636x393.jpg`} /> */}
                
                </div>
            </Link>
         );
    }
}
 
export default Cuisine;