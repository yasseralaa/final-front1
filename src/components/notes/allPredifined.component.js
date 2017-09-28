import React, { Component } from "react";
import { getAllNotes, getAllPredifinedNotes, updatePredifinedNote } from '../../services/note.services';

//for redux
import { connect } from 'react-redux';
import { dispatchNewCred } from '../../actions/authentication.action';
import { login } from '../../services/authentication.services';


class allPredifinedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { // this is a JSON object
            notes : "",
            errormsg:"",
            authenticatedID:"",
            authenticatedName:"",
            authenticatedEmail:"",
            authenticatedPassword:"",
            authenticatedMobileNumber:"",
            authenticatedRole:"",
            authenticatedMyWeatherNotes:"",
            allPredifinedNotes:[]
        }
    }

    componentDidMount() {
        console.log("view all notes");
        if(this.props.globalState.creds.role === undefined){
            this.props.history.push("/login");
        }else if(this.props.globalState.creds.role.id != "1"){
            this.props.history.push("/weather")
        }
        getAllPredifinedNotes({ email:this.props.globalState.creds.email, password: this.props.globalState.creds.password}).then(result => {
            console.log(result.data);
            this.setState({allPredifinedNotes: result.data});
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

        

        console.log(this.props.globalState.creds);
    }

    myNotesRender(){
        
        let predifinedNotes = this.state.allPredifinedNotes;
        return this.state.allPredifinedNotes.map((myNote, index) => {
            return(
            <tr>
                <td>{myNote.minimumTemprature}</td>
                <td>{myNote.maximumTemperature}</td>
                <td><input required="" type="text" value={myNote.message} onChange={(e) => {
                    predifinedNotes[index].message = e.target.value;
                    this.setState({allPredifinedNotes: predifinedNotes});
                }} className="form-control" name="contact[name][required]" id="contact:name" /></td>
            </tr>)
        });
    }

    savePredifinedNoteEvent(e) {
        e.preventDefault();
        this.state.allPredifinedNotes.map((myNote, index) => {
            updatePredifinedNote({ id: myNote.id, maximum_temperature: myNote.maximum_temperature, minimum_temprature:myNote.minimum_temperature, message:myNote.message },
            { email:this.props.globalState.creds.email, password: this.props.globalState.creds.password}).then();
        });
    }


    render() {
        return (
            <div>
              <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Minimum Temprature</th>
                        <th>Maximum Temprature</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody >
                    {this.myNotesRender()}
                </tbody>
            </table>
                <div className="row">
                                <div className="col-md-3">
                                    <br />
                                    <button className="btn btn-primary" onClick={this.savePredifinedNoteEvent.bind(this)}><i className="fa fa-check"></i>Update</button>
                                </div>
                </div>
            </div>
        )
    }

  
}



function mapGlobalStateToProps(globalState) {
    return {
        globalState: globalState.creds
    }
}

export default connect(mapGlobalStateToProps, { dispatchNewCred })(allPredifinedComponent);