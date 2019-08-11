import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerTileSummary extends Component {
 
// Question - why doesn't the below "key={this.props.index}" seem to work? Get a warning in chrome console

  render() {
    
    return (
        <Link key={this.props.index} className='list-group-item list-group-item-action' to={`/beer-detail/${this.props._id}`}>

          <div className="d-flex w-100 justify-content-between">
            <img className="img-fluid beers-img-thumbnail" src={this.props.image_url} alt={this.props.name}/>
            <div>
              <h3>{this.props.name}</h3>
              <h5>{this.props.tagline}</h5>
              <h5>Created by: {this.props.contributed_by}</h5>
            </div>
          </div>

        </Link>
    )
  }
}


export default BeerTileSummary;