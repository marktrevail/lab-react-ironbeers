import React, { Component } from 'react'
import AuthService from "../utils/AuthService";
const auth = new AuthService();

export default class LogOut extends Component {

    state = {
        error: null
    }

    componentDidMount(){
        auth.logout()
            .then(()=> {
                this.props.history.push("/");
            })
            .catch((error)=> {
                this.setState({error: error.message});
            })
    }

    render() {
        return (
            <div>
                {this.state.error? 
                    <h1>{this.state.error}</h1>
                    :
                    <h1>Logging out...</h1>
                }
            </div>
        )
    }
}