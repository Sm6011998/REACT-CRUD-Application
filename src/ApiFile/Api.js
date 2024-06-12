import axios from "axios"

export const AddstudentApi = async(data)=>{
    try{
        return await axios.post(`https://restapinodejs.onrender.com/api/student`,data)
    }
    catch(err){
        console.log(err)
    }
}

export const ShowData = async()=>{
    try{
        return await axios.get(`https://restapinodejs.onrender.com/api/allstudent`)
    }
    catch(err){
        console.log(err)
    }
}

export const DeleteUser =  async(id)=>{
    try{
        return await axios.delete(`https://restapinodejs.onrender.com/api/delete/${id}`)
    }
    catch(err){
        console.log(err)
    }
}

export const SingleUser =  async(id)=>{
    try{
        return await axios.get(`https://restapinodejs.onrender.com/api/edit/${id}`)
    }
    catch(err){
        console.log(err)
    }
}

export const PutUserData = async(data,id)=>{
    try{
        return await axios.post(`https://restapinodejs.onrender.com/api/update/${id}`,data)
    }
    catch(err){
        console.log(err)
    }
}






