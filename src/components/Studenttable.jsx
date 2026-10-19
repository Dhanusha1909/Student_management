import { useState } from 'react';
import { useEffect } from 'react';
import { getStudent } from '../services/authservice';



export const Studenttable=()=>{
    const [student,setStudent]=useState([]);
    useEffect(()=>{
        const fetchstudent=async()=>{
            try{
                const response=await getStudent();
                setStudent(response.data);
            }
            catch(err){
                console.log(err);
            }
        } ;
        fetchstudent();
    },[])

    return(
        <div className="container">
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                    <th>SL no</th>
                    <th>Register Nunber</th>
                    <th>Student Name</th>
                    <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                   { student.map((students,index)=>(
                    <tr key={students.register}>
                        <td>{index + 1}</td>
                        <td>{students.register}</td>
                        <td>{students.name}</td>
                        <td>{students.department}</td>

                    </tr>
                        
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}