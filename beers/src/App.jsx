import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import BeerList from './pages/BeerList';
import BeerNew from './pages/BeerNew';
import BeerRandom from './pages/BeerRandom';
import BeerDetail from './pages/BeerDetail';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/beer-list' component={BeerList} />
          <Route path='/beer-new' component={BeerNew} />
          <Route path='/beer-random' component={BeerRandom} />
          <Route path='/beer-detail/:id' component={BeerDetail} />
        </Switch>
      
      </div>
    )
  }
}


export default App;