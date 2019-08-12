import axios from 'axios';
import qs from 'querystring';


class AuthService {
    constructor(domain) {
        this.domain = domain || process.env.REACT_APP_BEER_API;
        this.login = this.login.bind(this);
    };

    login(username, password) {
        return axios({
            method: "POST",
            baseURL: this.domain,
            url: "/auth/login",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, password}),
        })
        .then((response)=> {
            this.setUser(response.data)
        })
    };

    signup({email, username, password, firstname, lastname}) {
        return axios({
            method: "POST",
            baseURL: this.domain,
            url: "/auth/signup",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({email, username, password, firstname, lastname}),
        })
        .then((response)=> {
            this.setUser(response.data);
        })
    };

    loggedIn(){
        const user = this.getUser()
        return !!user;  // !! forces to return true or false 
    }

    setUser(user){
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }

    logout(){
       return axios({
            baseURL: this.domain,
            url: "/auth/logout"
        })
        .then((res)=> {
            localStorage.removeItem('user');
        })
    }    
};



export default AuthService;