import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signin, signinWithGoogle } from '../helpers/auth';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    this.setState({ error: null });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  googleSignIn = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    return (
      <div>
        <div>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <h1>
              Login to
              <Link to="/">Chatty</Link>
            </h1>
            <p>Fill in the form below to login to your account.</p>
            <div>
              <input
                placeholder="Email"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <div>
              <input
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                type="password"
              />
            </div>
            <div>
              {this.state.error ? <p>{this.state.error}</p> : null}
              <button type="submit">Sign up</button>
            </div>
            <p>You can also Login with Google from below.</p>
            <button type="button" onClick={this.googleSignIn}>
              Login with Google
            </button>
            <hr></hr>
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
