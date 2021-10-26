import { React, Component } from "react";
import { Link } from "react-router-dom";

class DashboardPage extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <>
        <h1>Dashboard</h1>
        <p>1 <Link to="/list"> click here </Link>to list page</p>
        <p>2 <Link to="/update"> click here </Link>to uptade a record</p>
        <p>3 <Link to="/detail/1"> click here </Link>to detail page</p>
        <p>4 <Link to="/delete"> click here </Link>to delete page</p>
        <p>5 <Link to="/post"> click here </Link>to post page</p>
      </>
    )
  }
}

export default DashboardPage;
