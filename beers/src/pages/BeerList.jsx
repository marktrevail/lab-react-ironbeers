import React, { Component } from 'react';
import axios from 'axios';

import Nav from '../components/Nav';
import BeerTileSummary from '../components/BeerTileSummary';


class BeerList extends Component {

constructor(props) {
  super(props)

  this.state = {
     beerData: []
    }
  }

  componentDidMount() {
    axios.get('https://ih-beers-api.herokuapp.com/beers')
    .then((beers) => {
      this.setState({beerData: beers.data})
    })
    .catch((err) => {
      console.log(err);
    });
  };


  render() {

    console.log(this.state.beerData)

    return (
      <div>
        
        <Nav />

        <div className="row">
          <div className="col-lg-5 mx-auto col-md-12">
        
            <div className="list-group">
              {this.state.beerData.map((beer, index) => {
                  return (
                    <BeerTileSummary
                      index = {index.toString()}
                      {...beer}
                    / > );
                })};
            </div>
  
          </div>
        </div>
      </div>
    )
  }
}


export default BeerList;
