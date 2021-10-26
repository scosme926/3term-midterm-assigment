import { React, Component } from "react";
import { getInstrumentDetail } from "../api/instruments";
import { Link } from "react-router-dom";

class DetailPage extends Component{
  constructor(props){
    super(props)
    // https://stackoverflow.com/a/3730376
    var url = window.location.pathname;
    var stuff = url.split('/');
    var id = stuff[stuff.length-1];
    this.state = {
      id:id,
      result:{},
    };
    this.onSuccefullDetail = this.onSuccefullDetail.bind(this);
    this.onErrorDetail = this.onErrorDetail.bind(this);
    this.onDoneDetail = this.onDoneDetail.bind(this);
  }


  onSuccefullDetail(response){
    this.setState({
      result: response.data,
    })
  }

  onErrorDetail(response){

  }

  onDoneDetail(){

  }

  componentDidMount(){
    getInstrumentDetail(this.state.id, this.onSuccefullDetail, this.onErrorDetail, this.onDoneDetail)
  }


  render(){
    const{result} = this.state
    return(
      <>
        <h1>Details</h1>
        <p>ID:{result.id}</p>
        <p>name:{result.name}</p>
        <p>price:{result.price}</p>
        <p>model:{result.model}</p>
        <p>brand:{result.brand}</p>
        <p>Go back to the dashboard <Link to="/">click here</Link></p>
      </>
    )
  }
}

  export default DetailPage;
