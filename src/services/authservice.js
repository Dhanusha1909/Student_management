import axios from 'axios';

const API_URL="http://localhost:8080";


export const putStudent=(data)=>axios.post(`${API_URL}/api/student`,data);
export const getStudent=()=>axios.get(`${API_URL}/api/student`);
