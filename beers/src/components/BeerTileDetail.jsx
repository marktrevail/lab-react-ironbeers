import React, { Component } from 'react'

class BeerTileDetail extends Component {
  render() {
    return (
      <div>
        
        <img className="img-fluid beers-img-thumbnail" src={this.props.image_url} alt={this.props.name}/>
        
        <div>
          <h2>{this.props.name}</h2>          
          <h2>{this.props.attenuation_level}</h2>
        </div> 
        <div>
          <h2>{this.props.tagline}</h2>          
          <h2>{this.props.first_brewed}</h2>
        </div> 

        <h4>{this.props.description}</h4>

        <h5>{this.props.contributed_by}</h5>

      </div>
    )
  }
}


export default BeerTileDetail;
