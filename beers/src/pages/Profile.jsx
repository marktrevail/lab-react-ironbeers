import React, { Component } from 'react'
import MainLayout from '../layout/MainLayout';
import AuthService from "../utils/AuthService";
const auth = new AuthService();

export default class Profile extends Component {

    render() {

        let user = auth.getUser();

        return (
            <MainLayout>
                
              <div className="row">
                <div className="col-lg-5 mx-auto col-md-12 container-profile">

                    <img src='https://i.pravatar.cc/300' alt="Profile pic"></img>

                    <h4>Username: {user.username}</h4>
                    <h4>E-mail: {user.email}</h4>

                    <h4>First Name: {user.firstname}</h4>
                    <h4>Last Name: {user.lastname}</h4>

                  </div>
              </div>

           </ MainLayout>
        )
    }
}
