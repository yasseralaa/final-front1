import React, { Component } from "react";
import { Link } from 'react-router-dom';

//for redux
import { connect } from 'react-redux';
import { dispatchNewCred } from '../../actions/authentication.action';


class HeaderComponent extends Component {

    // logoutClick(e) {

    //     this.props.dispatchNewCred([]);
    //     this.props.history.push("/login");

    // }

    navRender() {
        if (this.props.globalState.creds.role === undefined) {

            //Vistor
            return (
                <ul id="topMain" className="nav nav-pills nav-main">
                    <li>
                        <Link to="/register">
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            );


        } else if (this.props.globalState.creds.role.id == "1") {


            // Admin
            return (
                <ul id="topMain" className="nav nav-pills nav-main">

                    <li>
                        <Link to="/addnote">
                            Add Note
                 </Link>
                    </li>
                    <li>
                        <Link to="/weather">
                            Today's Weather
                 </Link>
                    </li>
                    <li>
                        <Link to="/note">
                            Today's Note
                 </Link>
                    </li>
                    <li>
                        <Link to="/viewallnotes">
                            View my notes
                         </Link>
                    </li>
                    <li>
                        <Link to="/allpredifined">
                            View predifined notes
                         </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            Logout
                        </Link>
                    </li>
                </ul>
            );
        } else {
            // User
            return (
                <ul id="topMain" className="nav nav-pills nav-main">
                    <li>
                        <Link to="/weather">
                            Today's Weather
                         </Link>
                    </li>
                    <li>
                        <Link to="/note">
                            Today's Note
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            Logout
                     </Link>
                    </li>
                </ul>
            );
        }
    }


    render() {
        return (
            <div id="header" className="sticky clearfix">
                <header id="topNav">
                    <div className="container">
                        <button className="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
                            <i className="fa fa-bars"></i>
                        </button>
                        <a className="logo pull-left scrollTo" href="#top">
                            <img src="Orange-logo.png" alt="" />
                        </a>
                        {/*the comment*/}
                        <div className="navbar-collapse pull-right nav-main-collapse collapse submenu-dark">
                            <nav className="nav-main">

                                {this.navRender()}

                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

function mapGlobalStateToProps(globalState) {
    return {
        globalState: globalState.creds
    }
}

export default connect(mapGlobalStateToProps, { dispatchNewCred })(HeaderComponent);