import React, { Component } from 'react'

class BeerTileDetail extends Component {
  render() {
    return (
      <div className="w-100 mt-4">
        
        <img className="img-fluid beers-img-medium mb-3" src={this.props.image_url} alt={this.props.name}/>
        
        <div className="d-flex">
          <h2 className="mr-5">{this.props.name}</h2>          
          <h2 className="text-secondary">{this.props.attenuation_level}</h2>
        </div> 
        <div>
          <h2>{this.props.tagline}</h2>          
          <h4>{this.props.first_brewed}</h4>
        </div> 

        <h4 className="text-secondary">{this.props.description}</h4>

        <h5>{this.props.contributed_by}</h5>

      </div>
    )
  }
}


export default BeerTileDetail;
