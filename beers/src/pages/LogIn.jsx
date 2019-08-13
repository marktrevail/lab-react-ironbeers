import React, { Component } from 'react'
import MainLayout from '../layout/MainLayout';
import {Form, Button} from 'react-bootstrap';
import AuthService from "../utils/AuthService";
const auth = new AuthService();


class LogIn extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      
      user: {
        username: null,
        password: null
      },

      error: null
    };
  };

  handleFormChange = (e)=> {
    const user = {...this.state.user};
    user[e.target.name] = e.target.value;
    this.setState({user});
  };
  
  handleFormSubmit = (e)=> {
    e.preventDefault();
    auth.login(this.state.user.username, this.state.user.password)
        .then(()=> {
            this.setState({error: ''});
            this.props.history.push('/');
        })
        .catch(({response})=> {
            this.setState({error: response.data.message});
        })
  };


  render() {

    return (

      <MainLayout>

        <div className="row">
          <div className="col-lg-5 mx-auto col-md-12">

            <Form className="mt-3" onSubmit={this.handleFormSubmit}>

               <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="text" placeholder="" value={this.state.username} onChange={this.handleFormChange}/>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="" value={this.state.password} onChange={this.handleFormChange}/>
              </Form.Group>

              <Button type="submit">Log In</Button>

            </Form>

          </div>
        </div>

      </ MainLayout>
    )
  }
}


export default LogIn;
