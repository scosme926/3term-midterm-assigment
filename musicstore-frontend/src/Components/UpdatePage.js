import { React, Component } from "react";
import { Link } from "react-router-dom";
import { getInstrumentDetail, putInstrumentUpdated } from "../api/instruments";




class UpdatePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 1, // When dealing with API updates, you need to have the record ID.
            name: "",
            price: "",
            model: "",
            brand: "",
            isLoading: false,
        };
        this.onTextChange = this.onTextChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onGetInstrumentDetailDone = this.onGetInstrumentDetailDone.bind(this);
        this.onGetInstrumentDetailSuccess = this.onGetInstrumentDetailSuccess.bind(this);
        this.onGetInstrumentDetailError = this.onGetInstrumentDetailError.bind(this);
        this.onPutInstrumentDetailDone = this.onPutInstrumentDetailDone.bind(this);
        this.onPutInstrumentDetailError = this.onPutInstrumentDetailError.bind(this);
        this.onPutInstrumentDetailSuccess = this.onPutInstrumentDetailSuccess.bind(this);
    }

    componentDidMount(){
        this.setState({
            isLoading: true,
        }, ()=>{
            getInstrumentDetail(this.state.id, this.onGetInstrumentDetailSuccess, this.onGetInstrumentDetailError, this.onGetInstrumentDetailDone);
        })
    }

    onGetInstrumentDetailSuccess(response) {
        this.setState({
            name: response.data["name"],
            price: response.data["price"],
            model: response.data["model"],
            brand: response.data["brand"],
        });
    }

    onGetInstrumentDetailError(err) {
    }

    onGetInstrumentDetailDone() {
        this.setState({
            isLoading: false,
        });
    }

    onPutInstrumentDetailSuccess(response) {
    }

    onPutInstrumentDetailError(err){
    }

    onPutInstrumentDetailDone() {
        this.setState({
            isLoading: false,
        });
    }

    onTextChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]:value,
        });
    }

    onButtonClick(e) {
        const { id, name, price, model, brand } = this.state;

        const data = {
            id: id,
            name: name,
            price: price,
            model: model,
            brand: brand,
        };

        this.setState({
            isLoading: true,
        }, ()=>{
            putInstrumentUpdated(data, this.onPutInstrumentDetailError, this.onPutInstrumentDetailError, this.onPutInstrumentDetailDone);
        });
    }

    render() {
        const { name, price, model, brand, isLoading } = this.state;



        return (
            <>
                <h1>Update Instrument Record</h1>
                {isLoading
                    ? <>
                        <b>Loading ... </b>
                    </>
                    : <>
                        <p>
                            Name: <input name="name" value={name} onChange={this.onTextChange} />
                        </p>
                        <p>
                            Price: <input name="price" value={price} onChange={this.onTextChange} />
                        </p>
                        <p>
                            Model: <input name="model" value={model} onChange={this.onTextChange} />
                        </p>
                        <p>
                            Brand: <input name="brand" value={brand} onChange={this.onTextChange} />
                        </p>
                        <p>
                            <button onClick={this.onButtonClick}>Update</button>
                        </p>
                        <p>Go back to the dashboard <Link to="/">click here</Link></p>
                    </>
                }



            </>
        );
    }
}



export default UpdatePage;
