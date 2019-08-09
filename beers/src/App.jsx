import React, { Component } from 'react';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        
        <Switch>
          <Route exact path='/' component={Home} />   
          <Route path='/beer-list' component={BeerList} />   
          <Route path='/beer-new' component={BeerNew} />   
          <Route path='/beer-detail/:id' component={BeerDetail} />   
        </Switch>
      
      </div>
    )
  }
}


export default App;
