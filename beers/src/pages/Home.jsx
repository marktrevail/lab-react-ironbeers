import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {

    console.log(process.env.REACT_APP_BEER_API);

    return (
     <div>
     
      <Link to='/beer-list'>
        <div className="row">
          <div className="col-12">
            <img className="img-fluid w-100" src="/img/beers.png" alt="Beers"/>
          </div>
        </div>
      </Link>
        <div className="row p-3">
          <div className="col-12">
            <h1>All Beers</h1>
            <aside>See a list of all beers</aside>
          </div>
        </div>

      <Link to='/beer-random'>
        <div className="row">
          <div className="col-12">
            <img className="img-fluid w-100" src="/img/random-beer.png" alt="Random Beer"/>
          </div>
        </div>
      </Link>
      <div className="row p-3">
        <div className="col-12">
          <h1>Random Beer</h1>
          <aside>Get a random beer</aside>
        </div>
      </div>

      <Link to='/beer-new'>
        <div className="row">
          <div className="col-12">
            <img className="img-fluid w-100" src="/img/new-beer.png" alt="New Beer"/>
          </div>
        </div>
      </Link>
      <div className="row p-3">
        <div className="col-12">
          <h1>New Beer</h1>
          <aside>Create a new beer</aside>
        </div>
      </div>

    </div>
    )
  }
}


export default Home;
