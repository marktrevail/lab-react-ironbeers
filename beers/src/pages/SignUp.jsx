import React, { Component } from 'react'
import Nav from '../components/Nav';
import {Form, Button} from 'react-bootstrap';
import AuthService from "../utils/AuthService";
const auth = new AuthService();


class SignUp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      
      user: {
        email: '',
        username: '',
        password: '',
        firstname: '',
        lastname: ''
      },

      error: ''
    };
  };

  handleFormChange = (e)=> {
    const user = {...this.state.user};
    user[e.target.name] = e.target.value;
    this.setState({user});
  };
  
  handleFormSubmit = (e)=> {
    e.preventDefault();
    auth.signup(this.state.user)
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
      <div>
        
        <Nav />

        <div className="row">
          <div className="col-lg-5 mx-auto col-md-12">

            <Form className="mt-3" onSubmit={this.handleFormSubmit}>

              <Form.Group controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control name="email" type="email" placeholder="" value={this.state.email} onChange={this.handleFormChange}/>
              </Form.Group>

              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="text" placeholder="" value={this.state.username} onChange={this.handleFormChange}/>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="" value={this.state.password} onChange={this.handleFormChange}/>
              </Form.Group>

              <Form.Group controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstname" type="text" placeholder="" value={this.state.firstname} onChange={this.handleFormChange}/>
              </Form.Group>

              <Form.Group controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastname" type="text" placeholder="" value={this.state.lastname} onChange={this.handleFormChange}/>
              </Form.Group>

              <Button type="submit">Sign up</Button>

            </Form>

          </div>
        </div>

      </div>
    )
  }
}


export default SignUp;
