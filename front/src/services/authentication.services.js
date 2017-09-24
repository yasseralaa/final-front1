import axios from "axios"

const baseURL = "http://localhost:8080";

export function addUser (userData){
    console.log("addUser service");
    return axios({
        method:'post',
        headers:{
            'X-Requested-With':'XMLHttpRequest'
        },
        withCredentials:true,
        data:userData,
        url: baseURL + "/users/saveuser"
    });
}


//need to be Edited
export function login (userData){
    console.log(userData.email);
    console.log(userData.password);
    console.log("Login service");
    return axios({
        method:'post',
        headers:{
            'X-Requested-With':'XMLHttpRequest'
        },
        withCredentials:true,
        data:userData,
        auth:{
            username:userData.email,
            password:userData.password
        },
        url: baseURL + "/users/login"
    });
}
