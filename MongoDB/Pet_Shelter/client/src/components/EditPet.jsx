import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const EditPet = (props) => {
    
    const [petInfo, setPetInfo] = useState({
        title:"",
        type:"",
        description: "",
        skills1: "",
        skills2: "",
        skills3: ""
    }) 

    const [errors, setErrors] = useState ({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
        .then(res => {
            setPetInfo(res.data.pets)
        })
        .catch(err => console.log('Somethings wrong with Axios call', err))
    }, [])

    const changeHandler = (e) => {
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/edit/${props._id}`, petInfo)
            .then (res => {
                console.log('************************', res)
                if (res.data.error) {
                    setErrors(res.data.error.errors)
                } else {
                    setPetInfo(res.data.pet)
                    navigate('/')
                }
            })
            .catch(err => console.log('Somethings wrong with Axios call', err))
    }

    return (
        <div>   
            <h2>Edit {petInfo.title}</h2>
            <Link to = "/" className = "card-link">Home</Link>
            <div className = "container">
                <form onSubmit = {submitHandler}> 
                    <div className = "form-group">
                        <label>Title:</label>
                        <input onChange = {changeHandler} type = "text" name = "title" id = "" className = "form-control" value = {petInfo.title} />
                        <p className = "alert-danger">{errors.title? errors.title.message:null}</p>
                    </div>
                    <div className = "form-group">
                        <label>Type:</label>
                        <input onChange = {changeHandler} type = "text" name = "type" id = "" className = "form-control" value = {petInfo.type} />
                        <p className = "alert-danger">{errors.type? errors.type.message:null}</p>
                    </div>
                    <div className = "form-group">
                        <label>Description:</label>
                        <textarea onChange = {changeHandler} name="description" id="" cols="20" rows="5" className ="form-control" value = {petInfo.description} />
                        <p className = "alert-danger">{errors.description? errors.description.message:null}</p>
                    </div>
                    <div className = "form-group">
                    <h4>Skills (optional):</h4>
                    <label>Skill 1:</label>
                    <input onChange = {changeHandler} type = "text" name = "skills1" id = "" className = "form-control" value = {petInfo.skills1} />
                    <label>Skill 2:</label>
                    <input onChange = {changeHandler} type = "text" name = "skills2" id = "" className = "form-control" value = {petInfo.skills2}/>
                    <label>Skill 3:</label>
                    <input onChange = {changeHandler} type = "text" name = "skills3" id = "" className = "form-control" value = {petInfo.skills3} />
                </div>
                    <input type = "submit" value = "Edit Pet" />
                </form>
            </div>
        </div>
    );
};

export default EditPet;