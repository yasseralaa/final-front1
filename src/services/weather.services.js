import axios from "axios"

const baseURL = "http://localhost:80";


export function getWeather(userData){
    console.log("getWeather service");
    console.log(userData);
    return axios({
        method:'get',
        headers:{
            'X-Requested-With':'XMLHttpRequest'
        },
        withCredentials:true,
        auth:{
            username:userData.email,
            password:userData.password
        },
        url: baseURL + "/weather/today"
    });
}
