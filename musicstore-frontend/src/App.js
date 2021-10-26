import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ListPage from "./Components/ListPage"
import UpdatePage from "./Components/UpdatePage"
import DashboardPage from "./Components/DashboardPage"
import DetailPage from "./Components/DetailPage"
import DeletePage from "./Components/DeletePage"
import PostPage from "./Components/PostPage"
import LoginPage from "./Components/LoginPage"
import RegisterPage from "./Components/RegisterPage"


class App extends Component{
  constructor(props){
    super(props)
    this.state = {

    };
  }

  render(){
    return(
      <>
      <Router>
          <Switch>
            <Route path="/post">
              <PostPage />
            </Route>
            <Route path="/delete">
              <DeletePage />
            </Route>
            <Route path="/detail/:id">
              <DetailPage />
            </Route>
            <Route path="/update">
              <UpdatePage />
            </Route>
            <Route path="/list">
              <ListPage />
            </Route>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
      </Router>
      </>
    )
  }
}




export default App;
