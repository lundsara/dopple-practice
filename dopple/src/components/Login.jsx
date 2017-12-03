import React, { Component } from 'react';



class Login extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }


  render() {
    return (
      <div className="login">
        <div className="wrapper">
          <h2>Your Account</h2>
          {/* adding ternary operator for login logout */}
          {this.props.user ?
            <button onClick={this.props.logout}>Log Out</button>
            :
            <button onClick={this.props.login}>Log In</button>
          }
        </div>
      </div>
    );
  }
}
export default Login;
