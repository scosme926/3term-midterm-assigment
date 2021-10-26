import { React, Component } from "react";
import { Link } from "react-router-dom";
import { getInstruments } from "../api/instruments";

class ListPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      limit:25,
      page:0,
      results:[],
      count:0,
    };
    this.onSuccefullListInstruments = this.onSuccefullListInstruments.bind(this);
    this.onErrorListInstruments = this.onErrorListInstruments.bind(this);
    this.onDoneListInstruments = this.onDoneListInstruments.bind(this);
  }

  onSuccefullListInstruments(response){
    this.setState({
      count: response.data["count"],
      results: response.data["results"]
    })
  }

  onErrorListInstruments(response){

  }

  onDoneListInstruments(){

  }

  componentDidMount(){
    getInstruments(this.state.limit, this.state.page, this.onSuccefullListInstruments, this.onErrorListInstruments, this.onDoneListInstruments)
  }

  render(){
    const {results} = this.state;

    let elements = []
    for (let result of results) {
      let element = (
        <tr>
          <td>{result.id}</td>
          <td>{result.name}</td>
          <td>{result.price}</td>
          <td>{result.model}</td>
          <td>{result.brand}</td>
          <td>
                <Link to={`/detail/${result.id}`}>View</Link>
          </td>
        </tr>
      );
      elements.push(element);
    }

    return(
      <>
        <h1>Table</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Model</th>
            <th>Brand</th>
          </tr>
          {elements}
        </table>
        <p>Go back to the dashboard <Link to="/">click here</Link></p>
      </>
    )
  }

}

export default ListPage;
