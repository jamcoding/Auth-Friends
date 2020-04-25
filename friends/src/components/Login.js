import React from 'react';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(response => {
                console.log('Login.js: login: success: response: ', response);
                localStorage.getItem('token', response.data.payload);
                this.props.history.push('/protected')
            })
            .catch(error => console.log('error', error));
    };

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="username" value={this.state.credentials.username} onChange={this.handleChange} />
                    <input type="password" name="password" value={this.state.credentials.password} onChange={this.handleChange} />
                    <button>Login</button>
                </form>
            </div>
        );
    };
};

export default Login;
