import React, { Component } from "react";
import { addUser } from '../../services/authentication.services';

//for redux
import { connect } from 'react-redux';
import { dispatchNewCred } from '../../actions/authentication.action';


class AddUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { // this is a JSON object
            userName: "",
            userEmail: "",
            userPassword: "",
            userMobileNumber: "",
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


    // componentDidMount() {
    //     if (this.props.globalState.creds.role != undefined) {
    //        this.props.dispatchNewCred([]);
    //        this.props.history.push("/login");
    //     }
    // }


    inputNameChanged(e) {
        this.setState({
            userName: e.target.value
        }); // to implement two way data binding
    }

    inputEmailChanged(e) {
        this.setState({
            userEmail: e.target.value
        }); // to implement two way data binding
    }

    inputPasswordChanged(e) {
        this.setState({
            userPassword: e.target.value
        }); // to implement two way data binding
    }

    inputMobileNumberChanged(e) {
        this.setState({
            userMobileNumber: e.target.value
        }); // to implement two way data binding
    }



    addUserEvent(e) {
        e.preventDefault();
        addUser({ name: this.state.userName, email: this.state.userEmail, password: this.state.userPassword, mobileNumber: this.state.userMobileNumber, roleId: "2" })
            .then();
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading panel-heading-transparent">
                    <h2 className="panel-title bold">Add User</h2>
                </div>
                <div className="panel-body">
                    <h4>{this.state.errormsg}</h4>
                    <form>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="contact:name">Name</label>
                                    <input required="" type="text" value={this.state.userName} onChange={this.inputNameChanged.bind(this)} className="form-control" name="contact[name][required]" id="contact:name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="contact:phone">Email</label>
                                    <input type="mail" value={this.state.userEmail} onChange={this.inputEmailChanged.bind(this)} className="form-control" name="contact[phone]" id="contact:phone" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="contact:name">Password</label>
                                    <input required="" type="text" value={this.state.userPassword} onChange={this.inputPasswordChanged.bind(this)} className="form-control" name="contact[name][required]" id="contact:name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="contact:name">Mobile Number</label>
                                    <input required="" type="text" value={this.state.userMobileNumber} onChange={this.inputMobileNumberChanged.bind(this)} className="form-control" name="contact[name][required]" id="contact:name" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <br />
                                <button className="btn btn-primary" onClick={this.addUserEvent.bind(this)}><i className="fa fa-check"></i> Add user</button>
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
        globalState: globalState.creds
    }
}

export default connect(mapGlobalStateToProps, { dispatchNewCred })(AddUserComponent);