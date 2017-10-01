import axios from "axios"

const baseURL = "http://localhost:80";

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
    }).catch(error => {
        return "Something Went Wrong";
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
    }).catch(error => {
        return "Wrong User name or Password";
      });
}

export function logout(userData)
{
    console.log("get notes");
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
        url: baseURL +  "/users/logout"
    });
}
