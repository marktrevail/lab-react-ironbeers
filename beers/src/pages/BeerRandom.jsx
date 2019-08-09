import React, { Component } from 'react'
import Nav from '../components/Nav';
import BeerTileDetail from '../components/BeerTileDetail';
import axios from 'axios';

class BeerRandom extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       beerData: []
      }
    }
  
    componentDidMount() {

      axios.get(`https://ih-beers-api.herokuapp.com/beers/random`)
      .then((beer) => {
        this.setState({beerData: beer.data})
      })
      .catch((err) => {
        console.log(err);
      });
    };

  
  render() {

    return (
      <div>
        
        <Nav />
        
        <BeerTileDetail
          {...this.state.beerData}
        />

      </div>
    )
  }
}


export default BeerRandom;
