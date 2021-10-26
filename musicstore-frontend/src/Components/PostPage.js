import React, { Component } from "react";
import { postInstruments } from "../api/instruments";
import { Link } from "react-router-dom";


class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            "name": "",
            "price": "",
            "model": "",
            "brand": "",
            "errors": [],
        };
        this.onTextChange = this.onTextChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onPostInstrumentDone = this.onPostInstrumentDone.bind(this);
        this.onPostInstrumentError = this.onPostInstrumentError.bind(this);
        this.onPostInstrumentSuccess = this.onPostInstrumentSuccess.bind(this);
    }

    onPostInstrumentSuccess(response) {
        alert("Your record has been saved!");
    }

    onPostInstrumentError(error) {
    }

    onPostInstrumentDone() {
    }

    onTextChange(e) {
        const value = e.target.value;
        const key = e.target.name;
        this.setState({
            [key]: value,
        });
    }



    onSaveClick(e) {
        const { name, price, model, brand } = this.state;
        let errors = {};
        if (name === "") {
            errors["name"] = "Missing value";
        }
        if (price === "") {
            errors["price"] = "Missing value";
        }
        if (model === "") {
            errors["model"] = "Missing value";
        }
        if (brand === "") {
            errors["brand"] = "Missing value";
        }
        if (Object.keys(errors).length > 0) {
            this.setState({
                "errors": errors,
            });
            return;
        }
        const data = {
            "name": name,
            "price": price,
            "model": model,
            "brand": brand,
        };
        postInstruments(
            data,
            this.onPostInstrumentSuccess,
            this.onPostInstrumentError,
            this.onPostInstrumentDone
        );
    }

    render() {
        const { name, price, model, brand, errors } = this.state;
        let guiErrors = []
        for (let key in errors) {
            let element = (
                <li>{key} - {errors[key]}</li>
            );
            guiErrors.push(element);
        }
        let errorOut = "";
        if (Object.keys(guiErrors).length > 0) {
            errorOut = (
                <>
                    <h2>Error(s):</h2>
                    <ul>
                        {guiErrors}
                    </ul>
                </>
            )
        }
        return(
           <>
                <h1>Create Instrument</h1>
                {errorOut}
                <p>
                    Name: <input name="name" value={name} onChange={this.onTextChange} />
                    {errors && errors["name"] &&
                        <>
                            <br />
                            <b>name - {errors["name"]}</b>
                        </>
                    }
                </p>
                <p>
                    price: <input name="price" value={price} onChange={this.onTextChange} />
                    {errors && errors["price"] &&
                        <>
                            <br />
                            <b>price - {errors["price"]}</b>
                        </>
                    }
                </p>
                <p>
                    model: <input name="model" value={model} onChange={this.onTextChange} />
                    {errors && errors["model"] &&
                        <>
                            <br />
                            <b>model - {errors["model"]}</b>
                        </>
                    }
                </p>
                <p>
                    brand: <input name="brand" value={brand} onChange={this.onTextChange} />
                    {errors && errors["brand"] &&
                        <>
                            <br />
                            <b>brand - {errors["brand"]}</b>
                        </>
                    }
                </p>
                <input type="button" value="Save" onClick={this.onSaveClick} />
                <p>Go back to the dashboard <Link to="/">click here</Link></p>
           </>
        );
    }
}



export default PostPage;
