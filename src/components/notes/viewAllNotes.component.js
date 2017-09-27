import React, { Component } from "react";
import { getAllNotes } from '../../services/note.services';

//for redux
import { connect } from 'react-redux';
import { dispatchNewCred } from '../../actions/authentication.action';
import { login } from '../../services/authentication.services';


class ViewAllNotesComponent extends Component {
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
        }
    }

    componentDidMount() {
        console.log("view all notes");
        if(this.props.globalState.creds.role === undefined){
            this.props.history.push("/login");
        }else if(this.props.globalState.creds.role.id != "1"){
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

    myNotesRender(){
        return this.props.globalState.creds.weatherNotes.map((myNote, index) => {
            console.log(myNote);
            return(
                
            <tr>
                <td>{myNote.note}</td>
                <td>{(new Date(myNote.date)).toDateString()}</td>
            </tr>)
        });
    }


    render() {
        return (
            <div>
              <table className="table table-hover">
                <thead>
                    <tr>
                        <th>My Old Notes :</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.myNotesRender()}
                </tbody>
            </table>
            </div>
        )
    }

  
}



function mapGlobalStateToProps(globalState) {
    return {
        globalState: globalState.creds
    }
}

export default connect(mapGlobalStateToProps, { dispatchNewCred })(ViewAllNotesComponent);