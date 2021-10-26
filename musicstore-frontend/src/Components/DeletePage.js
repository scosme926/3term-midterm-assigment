import { React, Component } from "react";
import { deleteInstrument } from  "../api/instruments";
import { Link } from "react-router-dom";


class DeletePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
        };
        this.onDeleteSuccess = this.onDeleteSuccess.bind(this);
        this.onDeleteError = this.onDeleteError.bind(this);
        this.onDeleteDone = this.onDeleteDone.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onDeleteSuccess(response){
        alert("Record has been deleted");
    }

    onDeleteError(err) {
        console.log(err);
    }

    onDeleteDone() {
    }

    onButtonClick(e) {
        deleteInstrument(this.state.id, this.onDeleteSuccess, this.onDeleteError, this.onDeleteDone);
    }


    render() {
        return (
            <>
                <h1>Delete Instrument</h1>
                <p>Are you sure you want to delete the instrument?</p>
                <p><button onClick={this.onButtonClick}>Yes</button></p>
                <p>Go back to the dashboard <Link to="/">click here</Link></p>
            </>
        );
    }
}



export default DeletePage;
