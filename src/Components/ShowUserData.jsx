import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DeleteUser, ShowData } from '../ApiFile/Api'
import { FadeLoader,ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'




const ShowUserData = () => {
    const [user, setUser] = useState([])
    const[load, setLoad] = useState(false)

    const GetDataFunc = async () => {
        setLoad(true)

        let TableData = await ShowData()
        setUser(TableData.data.data)
        console.log("ee", TableData.data.data)
        setLoad(false)
    }

    useEffect(() => {
        GetDataFunc()
    }, [])

    const deleteUserData = async(id)=>{
        setLoad(true)
        await DeleteUser(id)
        GetDataFunc()
        setLoad(false)
        toast.success("Data Deleted Successfully!")
    }

    return (
        <>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    load?(
                        <div style={{display:"flex", justifyContent:'center',alignItems:"center", marginTop:"6rem", marginLeft:"30rem"}}><ClipLoader color="#36d7b7" size={88}/></div>

                    ):(
                        <tbody>
                        {
                            user.map((item, key) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{key + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.address}</td>
                                            <td>{item.city}</td>
                                            
                                            
                                            <td>
                                                <Link class="btn btn-primary" to={`/edituser/${item.id}`} role="button" style={{ marginRight: "10px" }}>Edit</Link>
                                                {
                                                    load?(
                                                        <FadeLoader color="#36d7b7" />
    
                                                    ):(
                                                        <button type="button" class="btn btn-danger" onClick={() => deleteUserData(item.id)}>Delete</button>
                                                    )
                                                }
    
                                            </td>
                                        </tr>
    
                                    </>
                                )
                            })
                        }
    
                    </tbody>
                    )
                }

            </table>


        </>
    )
}

export default ShowUserData