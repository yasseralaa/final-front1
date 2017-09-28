import React, { Component } from "react";
import { getNote } from '../../services/note.services';

//for redux
import { connect } from 'react-redux';
import { dispatchNewCred } from '../../actions/authentication.action';
import { dispatchNewNote } from '../../actions/notes.action';

class ViewNotesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { // this is a JSON object
            note: "",
            errormsg: "",
            authenticatedID: "",
            authenticatedName: "",
            authenticatedEmail: "",
            authenticatedPassword: "",
            authenticatedMobileNumber: "",
            authenticatedRole: "",
            authenticatedMyWeatherNotes: "",
        }
    }

    componentDidMount() {
        console.log("IN view note");
        if (this.props.globalState.creds.name === undefined) {
            this.props.history.push("/login");
        }

        getNote({ email:this.props.globalState.creds.email, password: this.props.globalState.creds.password}).then(result => {
            console.log(result.data)
            this.props.dispatchNewNote(result.data);
            this.setState({
                note: result.data
            });

        }).catch((err) => { })
        

        this.setState({
            authenticatedID: this.props.globalState.creds.id,
            authenticatedName: this.props.globalState.creds.name,
            authenticatedEmail: this.props.globalState.creds.email,
            authenticatedPassword: this.props.globalState.creds.password,
            authenticatedMobileNumber: this.props.globalState.creds.mobileNumber,
            authenticatedRole: this.props.globalState.creds.role,
            authenticatedMyWeatherNotes: this.props.globalState.creds.weatherNotes
        });


        console.log(this.props.globalState2.note);


    }




    render() {
        return (
            <div>
                <p>Note : {this.props.globalState2.note}</p>
            </div>
        )
    }


}


function mapGlobalStateToProps(globalState) {
    return {
        globalState: globalState.creds,
        globalState2: globalState.note
    }
}

export default connect(mapGlobalStateToProps, { dispatchNewCred, dispatchNewNote })(ViewNotesComponent);