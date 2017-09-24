import axios from "axios"

const baseURL = "http://localhost:8080";


export function addNote(noteData,userData){
    console.log("addNote service");
    console.log(noteData);
    console.log(userData);
    return axios({
        method:'post',
        headers:{
            'X-Requested-With':'XMLHttpRequest'
        },
        withCredentials:true,
        auth:{
            username:userData.email,
            password:userData.password
        },
        data:noteData,
        url: baseURL + "/notes/addnote"
    });
}

export function getNote(userData){
    console.log("getNote service");
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
        url: baseURL + "/notes/getnote"
    });
}


export function getAllNotes(userData){
    console.log("getAllNotes service");
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
        url: baseURL + "/notes/getadminnote"
    });
}

