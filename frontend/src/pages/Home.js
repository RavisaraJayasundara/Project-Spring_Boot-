import React,{useEffect,useState} from 'react';
import axios from "axios";

export default function Home() {

  const [users,setUsers]=useState([])

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers = async()=>{
    const result = await axios.get("http://localhost:8080/users")
    setUsers(result.data);
  };

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">index</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((users,index)=>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{users.name}</td>
            <td>{users.username}</td>
            <td>{users.email}</td>
          </tr>
        ))
    }
    
    
  </tbody>
</table>
        </div>
    </div>
  )
}
