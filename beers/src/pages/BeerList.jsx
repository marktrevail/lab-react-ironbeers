import React, { Component } from 'react';
import axios from 'axios';

import Nav from '../components/Nav';
import BeerTileSummary from '../components/BeerTileSummary';
import { Form } from 'react-bootstrap';


class BeerList extends Component {

constructor(props) {
  super(props)

  this.state = {
     beerDataFull: [],
     beerDataDisplay: [],
     searchEntry: ''
    }
  }

  componentDidMount() {
    axios.get('https://ih-beers-api.herokuapp.com/beers')
    .then((beers) => {
      this.setState({
        beerDataFull: beers.data,
        beerDataDisplay: beers.data
      })
    })
    .catch((err) => {
      console.log(err);
    });
  };


  filterBeers = () => {
    let filteredBeers = this.state.beerDataFull.filter((beer) => {
        return beer.name.toLowerCase().indexOf(this.state.searchEntry.toLowerCase()) >= 0
      });

    this.setState({beerDataDisplay: filteredBeers})
  };

  handleSearch = (e) => {
    this.setState({searchEntry: e.target.value}, () => {
      this.filterBeers();
    });
  };

  render() {

    return (
      <div>
        
        <Nav />

        <div className="row">
          <div className="col-lg-5 mx-auto col-md-12">

            <Form className="mt-3">
              <Form.Group controlId="searchEntry">
                <Form.Control name="searchEntry" type="search" placeholder="Search for a beer by name" value={this.state.searchEntry} onChange={this.handleSearch}/>
              </Form.Group>
            </Form>

            <div className="list-group">
              {this.state.beerDataDisplay.map((beer, index) => {
                  return (
                    <BeerTileSummary
                      index = {index.toString()}
                      {...beer}
                    / > )
                })}
            </div>
  
          </div>
        </div>
      </div>
    )
  }
}


export default BeerList;