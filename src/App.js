//import logo from './logo.svg';
import './App.css';
import './table.css';
  

//import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {  useState } from "react";


function App() {

  const [data, getData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/users";
  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        
        getData(response);
      });

    }



  return (
    


    
  <>
  <table>
 
        <tr >
          <th>User ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
       <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.street},{item.address.city},{item.address.zipcode}</td>
            <td><Button href="https://github.com/sammanniazi/">See Profile</Button></td>
          </tr>
         
        
        ))}
         </tbody>
     
      </table>


      <button onClick={()=>fetchData(data)}>Display Data</button>
  
  </>
   

    

      
  

  );
}

export default App;
