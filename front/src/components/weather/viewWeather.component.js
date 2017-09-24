import React, { Component } from "react";
import { getWeather } from '../../services/weather.services';

//for redux
import { connect } from 'react-redux';
import { dispatchNewCred } from '../../actions/authentication.action';


class ViewWeatherComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { // this is a JSON object
            temp: 0,
            pressure: 0,
            humidity: 0,
            tempMax: 0,
            tempMin: 0,
            windSpeed: 0,
            windDeg: 0,
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
        console.log("IN view weather");
        if(this.props.globalState.creds.role === undefined){
            this.props.history.push("/login");
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


        getWeather({ email:this.props.globalState.creds.email, password: this.props.globalState.creds.password}).then(result => {
            // console.log(data)
            this.setState({
                temp: result.data.main.temp,
                pressure: result.data.main.pressure,
                humidity: result.data.main.humidity,
                tempMax: result.data.main.temp_max,
                tempMin: result.data.main.temp_min,
                windSpeed: result.data.wind.speed,
                windDeg: result.data.wind.deg
            });

        }).catch((err) => { })

        


        console.log(this.props.globalState.creds);

    }



    render() {
        return (
            <div>
                <p>Temperature : {this.state.temp}</p>
                <p>Pressure : {this.state.pressure}</p>
                <p>Humidity : {this.state.humidity}</p>
                <p>Max Temperature : {this.state.tempMax}</p>
                <p>Min Temperature : {this.state.tempMin}</p>
                <p>Wind Speed : {this.state.windSpeed}</p>
                <p>Wind Deg : {this.state.windDeg}</p>

            </div>
        )
    }


}



function mapGlobalStateToProps(globalState) {
    return {
        globalState: globalState.creds
    }
}

export default connect(mapGlobalStateToProps, { dispatchNewCred })(ViewWeatherComponent);