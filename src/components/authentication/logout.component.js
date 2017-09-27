import React, { Component } from "react";
import { logout } from '../../services/authentication.services';

//for redux
import { connect } from 'react-redux';
import { dispatchNewCred } from '../../actions/authentication.action';


class LogoutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { // this is a JSON object
            userEmail: "",
            userPassword: "",
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
        console.log("kokooooo");
        console.log(this.props.globalState.creds);
        this.props.dispatchNewCred([]);
        console.log(this.props.globalState.creds);
        //this.props.history.push("/login");
    }



    render() {
        return (
        <div>
            {/* {this.logout()} */}
        </div>)
    }

    
}


function mapGlobalStateToProps(globalState) {
    return {
        globalState: globalState.creds
    }
}

export default connect(mapGlobalStateToProps, { dispatchNewCred })(LogoutComponent);