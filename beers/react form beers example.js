import React, { Component } from 'react';
import axios from "axios";
import qs from "querystring"; // used for parsing a javascript object in the right format (x-www-form-urlencoded)
import "./AddBeer.css";

class AddBeer extends Component {
  constructor(props){
    super(props);

    this.state = { 
      tagline: '',
      first_brewed: '',
      brewers_tips: '',
      contributed_by: '',
      attenuation_level: '',
      name: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormChange = (e)=> {
    this.setState({ 
        [e.target.name]: e.target.value // within the square brackets "[]" you can use dynamic keys
    })
  }

  handleFormSubmit = (e)=> {
    e.preventDefault(); // disable the default form behavious (redirecting to a new page)
    debugger
    axios({
        method: "POST",
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data:  qs.stringify(this.state), // don't send data in json format => cors error
        url: `${process.env.REACT_APP_API}/beers/new`
    })
    .then((response)=> {
        /* extra
        https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
        */
    })
    .catch((error)=> {
        console.log(error)
    })

  }
  render(){
      debugger
    return (
      <div className="add-beer">
        <form onSubmit={this.handleFormSubmit} style={{display: "flex", "flex-wrap": "wrap"}}>{/* we don't want the default form submitting behaviour, so we're adding own submit handler   */}
            <div>
                <label>Name:</label>
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleFormChange} /> {/* reacts wants to be in charge of all the data   */}
            </div>

            <div>
                <label>Tagline:</label>
                <input type="text" name="tagline" placeholder="tagline" value={this.state.tagline} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
            </div>

            <div>
                <label>First Brewed:</label>
                <input type="text" name="first_brewed" placeholder="first brewed" checked={this.state.first_brewed} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
            </div>

            <div>
                <label>Brewers Tip:</label>
                <input type="text" name="brewers_tips" placeholder="brewers tip" checked={this.state.brewers_tips} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
            </div>
            <div>
                <label>Attenuation Level:</label>
                <input type="number" name="attenuation_level" placeholder="attenuation level" checked={this.state.attenuation_level} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
            </div>
            <div>
                <label>Contributed By:</label>
                <input type="text" name="contributed_by" placeholder="contributed by" checked={this.state.first_brewed} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
            </div>

            <div>
                <label>Description:</label>
                <textarea type="text" placeholder="description"  name="description" value={this.state.description} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
    )
  }
}

export default AddBeer;