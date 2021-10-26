import { React, Component } from "react";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <>
        <h1>Login</h1>
        <p>Dont have an account <Link to="/register"> click here </Link> to register</p>
      </>
    )
  }
}

export default LoginPage;
