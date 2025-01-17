import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import BeerList from './pages/BeerList';
import BeerNew from './pages/BeerNew';
import BeerRandom from './pages/BeerRandom';
import BeerDetail from './pages/BeerDetail';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import LogOut from './pages/LogOut';
import Profile from './pages/Profile';

class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/beer-list' component={BeerList} />
          <Route path='/beer-new' component={BeerNew} />
          <Route path='/beer-random' component={BeerRandom} />
          <Route path='/beer-detail/:beerId' component={BeerDetail} />

          <Route path='/auth/signup' component={SignUp} />
          <Route path='/auth/login' component={LogIn} />

          <ProtectedRoute redirectUrl='/auth/login' path="/auth/logout" component={LogOut}/>
          <ProtectedRoute redirectUrl='/auth/login' path="/profile" component={Profile}/>

        </Switch>
      
      </div>
    )
  }
}


export default App;