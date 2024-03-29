import React, { Component } from "react";
import { addNote, checkTodaysNoteSet, getNote, updateNote } from '../../services/note.services';

//for redux
import { connect } from 'react-redux';
import { dispatchNewCred } from '../../actions/authentication.action';
import { dispatchNewNote } from '../../actions/notes.action';


class AddNoteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { // this is a JSON object
            weatherNote: "",
            isWeatherNoteExist: "",
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
        console.log("IN ADD NOTE");
        
        getNote({email:this.props.globalState.creds.email, password: this.props.globalState.creds.password}).then(res => {
            
            console.log(res.data);
            this.setState({weatherNote: res.data});
            this.props.dispatchNewNote(res.data);
            console.log("my note:-");
            console.log(this.props.globalState2.note);
        })


        if (this.props.globalState.creds.role === undefined) {
            this.props.history.push("/login");
        } else if (this.props.globalState.creds.role.id != "1") {
            this.props.history.push("/weather")
        }

        this.setState({
            authenticatedID: this.props.globalState.creds.id,
            authenticatedName: this.props.globalState.creds.name,
            authenticatedEmail: this.props.globalState.creds.email,
            authenticatedPassword: this.props.globalState.creds.password,
            authenticatedMobileNumber: this.props.globalState.creds.mobileNumber,
            authenticatedRole: this.props.globalState.creds.role,
            authenticatedMyWeatherNotes: this.props.globalState.creds.weatherNotes
        });


        console.log(this.props.globalState.creds);
    }

    inputWeatherNoteChanged(e) {
        this.setState({
            weatherNote: e.target.value
        }); // to implement two way data binding
    }


    today() {
        var d = new Date();
        var ret = d.getFullYear() + "-";
        if (d.getMonth() < 9)
            ret += "0";


        ret += (d.getMonth() + 1) + "-";
        if (d.getDate < 10)
            ret += "0";

        ret += d.getDate();
        return ret;
    }


    addNoteEvent(e) {
        e.preventDefault();
                addNote({ id: this.state.authenticatedID, date: this.today(), note: this.state.weatherNote },
                { email:this.props.globalState.creds.email, password: this.props.globalState.creds.password}).then();
                this.props.dispatchNewNote(this.state.weatherNote);
                this.setState({isWeatherNoteExist: true});
                console.log("my note3:-");
                console.log(this.props.globalState2.note);

    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading panel-heading-transparent">
                    <h2 className="panel-title bold">Add Note</h2>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="contact:name">Note</label>
                                    <input required="" type="text" value={this.state.weatherNote} onChange={this.inputWeatherNoteChanged.bind(this)} className="form-control" name="contact[name][required]" id="contact:name" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <br />
                                <button className="btn btn-primary" onClick={this.addNoteEvent.bind(this)}><i className="fa fa-check"></i> Add note</button>
                            </div>
                        </div>
                    </form>
                </div>
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

export default connect(mapGlobalStateToProps, { dispatchNewCred, dispatchNewNote })(AddNoteComponent);