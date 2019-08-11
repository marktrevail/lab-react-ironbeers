import React, { Component } from 'react'
import Nav from '../components/Nav';
import qs from "querystring"; // used for parsing a javascript object into the right format (x-www-form-urlencoded)
import axios from "axios";
import {Form, Button} from 'react-bootstrap';


class BeerNew extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: '',
      tagline: '',
      brewers_tips: '',
      attenuation_level: '',
      first_brewed: '',
      contributed_by: ''
    }
  }

  handleFormChange = (e)=> {
    this.setState({ 
        [e.target.name]: e.target.value // "[]" is a dynamic key
    });
  };

  handleFormSubmit = (e)=> {
    e.preventDefault(); // (don't redirect to new page)
    debugger
    console.log(process.env.REACT_APP_BEER_API)
    axios({
        method: "POST",
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data:  qs.stringify(this.state), // don't send data in json format => cors error
//        url: `${process.env.REACT_APP_BEER_API}/beers/new`
        url: 'https://ih-beers-api.herokuapp.com/beers/new'
      })
    .then((response)=> {
      debugger
      
      /* extra
        https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
        */
    })
    .catch((err)=> {
        console.log(err)
    });
  };


  render() {
    return (
      <div>
        
        <Nav />

        <Form onSubmit={this.handleFormSubmit}>

          <Form.Group controlId="name">
             <Form.Label>Name</Form.Label>
             <Form.Control name="name" type="text" placeholder="" value={this.state.name} onChange={this.handleFormChange}/>
          </Form.Group>

          <Form.Group controlId="tagline">
             <Form.Label>Tagline</Form.Label>
             <Form.Control name="tagline" type="text" placeholder="" value={this.state.tagline} onChange={this.handleFormChange}/>
          </Form.Group>

          <Form.Group controlId="description">
             <Form.Label>Description</Form.Label>
             <Form.Control name="description" type="text" placeholder="" value={this.state.description} onChange={this.handleFormChange}/>
          </Form.Group>

          <Form.Group controlId="brewers_tips">
             <Form.Label>Brewers Tips</Form.Label>
             <Form.Control name="brewers_tips" type="text" placeholder="" value={this.state.brewers_tips} onChange={this.handleFormChange}/>
          </Form.Group>

          <Form.Group controlId="attenuation_level">
             <Form.Label>Attenuation Level</Form.Label>
             <Form.Control name="attenuation_level" type="text" placeholder="" value={this.state.attenuation_level} onChange={this.handleFormChange}/>
          </Form.Group>

          <Form.Group controlId="first_brewed">
             <Form.Label>First Brewed</Form.Label>
             <Form.Control name="first_brewed" type="date" placeholder="" value={this.state.first_brewed} onChange={this.handleFormChange}/>
          </Form.Group>

          <Form.Group controlId="contributed_by">
             <Form.Label>Contributed by</Form.Label>
             <Form.Control name="contributed_by" type="text" placeholder="" value={this.state.contributed_by} onChange={this.handleFormChange}/>
          </Form.Group>

          <Button type="submit">Submit</Button>

  </Form>


      </div>
    )
  }
}


export default BeerNew;
