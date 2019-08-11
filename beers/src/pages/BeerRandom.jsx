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
        
        <div className="row">
          <div className="col-lg-5 mx-auto col-md-12">

            <BeerTileDetail
              {...this.state.beerData}
            />

          </div>
        </div>

      </div>
    )
  }
}


export default BeerRandom;
