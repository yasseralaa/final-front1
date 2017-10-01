import React, { Component } from "react";
import { login } from '../../services/authentication.services';

//for redux
import { connect } from 'react-redux';
import { dispatchNewCred } from '../../actions/authentication.action';


class Authentication extends Component {
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
        console.log(this.props.globalState.creds)
        if(this.props.globalState.creds.name != undefined){
            this.props.history.push("/weather");
        }
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


    loginEvent(e) {
        e.preventDefault();
        login({ email: this.state.userEmail, password: this.state.userPassword })
            .then(res => {
                console.log("in res");
                //console.log(res.data);
                //this.props.dispatchNewCred(res.data)
                if (res.data == undefined) {
                    this.setState({errormsg: "User Doesn't Exist"});
                }
                else if (res.data.role.id == "1") {
                    this.props.dispatchNewCred(res.data)
                    this.props.history.push("/weather");
                    console.log("ADMIN");
                }
                else {
                    this.props.dispatchNewCred(res.data)
                    this.props.history.push("/weather");
                    console.log("USER");
                }

            });
    }

    render() {
        return (
           
            <div className="panel panel-default">
                <div className="panel-heading panel-heading-transparent">
                    <h2 className="panel-title bold">Login</h2>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="contact:phone">Email</label>
                                    <input type="mail" value={this.state.userEmail} onChange={this.inputEmailChanged.bind(this)} className="form-control" name="contact[phone]" id="contact:phone" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="contact:name">Password</label>
                                    <input required="" type="password" value={this.state.userPassword} onChange={this.inputPasswordChanged.bind(this)} className="form-control" name="contact[name][required]" id="contact:name" />
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <br />
                                <button className="btn btn-primary" onClick={this.loginEvent.bind(this)}><i className="fa fa-check"></i> Login</button>
                            </div>
                        </div>
                    </form>
                </div>
                <h2>{this.state.errormsg}</h2>
            </div>
        )
    }
}


function mapGlobalStateToProps(globalState) {
    return {
        globalState: globalState.creds
    }
}

export default connect(mapGlobalStateToProps, { dispatchNewCred })(Authentication);