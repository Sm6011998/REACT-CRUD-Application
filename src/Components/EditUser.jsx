import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PutUserData, SingleUser } from '../ApiFile/Api'
import { toast } from 'react-toastify'
import { FadeLoader } from 'react-spinners'

const EditUser = () => {


    const SetValue = {
        name: '',
        email: '',
        phone: '',
        address: "",
        city: "",
        class: ''

    }

    const [user, setuser] = useState(SetValue)
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()
    const [load, setLoad] = useState(false)

    const Validation = () => {
        let error = {}
        if (!user.name) {
            error.name = "Name is required"
        }
        if (!user.email) {
            error.email = "email is required"
        }
        if (!user.phone) {
            error.phone = "phone is required"
        }
        if (!user.address) {
            error.address = "address is required"
        }
        if (!user.city) {
            error.city = "city is required"
        }
        if (!user.class) {
            error.class = "class is required"
        }
        return error
    }

    const GetUserData = async () => {
        let response = await SingleUser(id)
        setuser(response.data)
        console.log(response, "ee")
    }

    useEffect(() => {
        GetUserData()
    }, [])


    const SubmitForm = async (data) => {
        data.preventDefault()
        setError(Validation())

        let SubmitValue = Validation()

        if (Object.keys(SubmitValue).length === 0) {
            setLoad(true)
            await PutUserData(user, id)
            navigate("/showuserdata")
            toast.success("Data Edited Successfully!")
            setLoad(false)
        }
    }

    const ChangeValue = (event) => {
        const { name, value } = event.target
        setuser({ ...user, [name]: value })

        if (name === "name") {
            if (value.length === 0) {
                setError({ ...error, name: "@value is required" })
                setuser({ ...user, name: '' })
            }
            else {
                setError({ ...error, name: '' })
                setuser({ ...user, name: value })
            }
        }
        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "@email is required" })
                setuser({ ...user, email: '' })
            }
            else {
                setError({ ...error, email: '' })
                setuser({ ...user, email: value })
            }
        }
        if (name === "phone") {
            if (value.length === 0) {
                setError({ ...error, phone: "@phone is required" })
                setuser({ ...user, phone: '' })
            }
            else {
                setError({ ...error, phone: '' })
                setuser({ ...user, phone: value })
            }
        }
        if (name === "address") {
            if (value.length === 0) {
                setError({ ...error, address: "@address is required" })
                setuser({ ...user, address: '' })
            }
            else {
                setError({ ...error, address: '' })
                setuser({ ...user, address: value })
            }
        }
        if (name === "city") {
            if (value.length === 0) {
                setError({ ...error, city: "@city is required" })
                setuser({ ...user, city: '' })
            }
            else {
                setError({ ...error, city: '' })
                setuser({ ...user, city: value })
            }
        }

        if (name === "class") {
            if (value.length === 0) {
                setError({ ...error, class: "@class is required" })
                setuser({ ...user, class: '' })
            }
            else {
                setError({ ...error, class: '' })
                setuser({ ...user, class: value })
            }
        }
    }

    return (
        <>
            <div className="container">
                <form onSubmit={SubmitForm}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name'
                            onChange={ChangeValue} value={user.name} />
                        <span style={{ color: "red" }}>{error.name}</span>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'
                            onChange={ChangeValue} value={user.email} />
                        <span style={{ color: "red" }}>{error.email}</span>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Phone</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='phone'
                            onChange={ChangeValue} value={user.phone} />
                        <span style={{ color: "red" }}>{error.phone}</span>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Address</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='address'
                            onChange={ChangeValue} value={user.address} />
                        <span style={{ color: "red" }}>{error.address}</span>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">City</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='city'
                            onChange={ChangeValue} value={user.city} />
                        <span style={{ color: "red" }}>{error.city}</span>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Class</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='class'
                            onChange={ChangeValue} value={user.class} />
                        <span style={{ color: "red" }}>{error.class}</span>
                    </div>
                    {
                        load ? (
                            <FadeLoader color="#36d7b7" />

                        ) : (
                            <button type="submit" class="btn btn-primary">Submit</button>
                        )
                    }
                </form>
            </div>

        </>
    )
}

export default EditUser