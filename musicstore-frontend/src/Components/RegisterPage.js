import { React, Component } from "react";
import { Link } from "react-router-dom";

class RegisterPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName:"",
      lastName:"",
      username:"",
      email:"",
      password:"",
    };
    this.onTextChange = this.onTextChange.bind(this)
    this.onSubmitClick = this.onSubmitClick.bind(this)
  }

  onTextChange(e){
    const name=e.target.name
    const value=e.target.value
    this.setState({
      [name]:value
    })
  }

  onSubmitClick(e){
    
  }

  render(){
    const{firstName, lastName, username, email, password} = this.state
    return(
      <>
        <h1>Register</h1>
        <p>First name: <input name="firstName" value={firstName} onChange={this.onTextChange}/></p>
        <p>Last name: <input name="lastName" value={lastName} onChange={this.onTextChange}/></p>
        <p>Username: <input name="username" value={username} onChange={this.onTextChange}/></p>
        <p>email: <input name="email" value={email} onChange={this.onTextChange}/></p>
        <p>password: <input name="password" value={password} onChange={this.onTextChange}/></p>
        <button onClick={this.onSubmitClick}>Submit</button>
        <p>Already have an account <Link to="/"> click here </Link>to login</p>
      </>
    )
  }
}

export default RegisterPage;
