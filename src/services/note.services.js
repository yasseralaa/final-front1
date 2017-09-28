import axios from "axios"

const baseURL = "http://localhost:80";


export function addNote(noteData,userData){
    console.log("addNote service");
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

export function updateNote(noteData,userData){
    console.log("updateNote service");
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
        url: baseURL + "/notes/updatenote"
    });
}

export function updatePredifinedNote(noteData,userData){
    console.log("updatePredifinedNote service");
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
        url: baseURL + "/notes/updatepredifined"
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

export function getAllPredifinedNotes(userData){
    console.log("getAllPredifinedNotes service");
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
        url: baseURL + "/notes/getpredifinednotes"
    });
}

