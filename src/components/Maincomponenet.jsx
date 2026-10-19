import { useState,useEffect } from 'react';
import { putStudent } from "../services/authservice";
import {useNavigate} from 'react-router-dom';


export const Maincomponenet=()=>{

    
    const [register,setRegister]=useState("");
    const [name,setName]=useState("");
    const [department,setDepartment]=useState("");
    const [error,setError]=useState("");
    const navigate=useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        setError("");
        if(!register.trim() || !name.trim() || !department.trim()){
            setError("Please fill the details!");
            return;
        }
        try{
            const formdata={
                register:register,
                name:name.trim(),
                department:department.trim()
            };
            await putStudent(formdata);
            navigate('/studenttable');
        }
        catch(error){
            setError("Failed to add Student");
            console.log(error);
        }

    }
    return(
        <div className="container">
            <h1>Student management</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    {error && <p className="error">{error}</p>}
                    <div className='forms'>
                        <label className="label-control">Register Number</label>
                        <input type="text" placeholder='type your register number' value={register} onChange={(e)=>{setRegister(e.target.value)}} required/>

                    </div>
                    <div className='forms'>
                        <label className="label-control">Name</label>
                        <input type="text" placeholder='type your Name' value={name} onChange={(e)=>{setName(e.target.value)}} required/>

                    </div>
                    <div className='forms'>
                        <label className="label-control">Department</label>
                        <input type="text" placeholder='type your department' value={department} onChange={(e)=>{setDepartment(e.target.value)}} required/>

                    </div>
                    <button type="submit" className="btn">Submit</button>


                </form>
            </div>
        </div>

    )
}