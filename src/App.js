import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import { Table } from "antd";

function App() {
  const [data , setData] = useState([]);


  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=> 
      setData(res.data))
  })
  const dataSource = data.map(e=>({
      key: e.id,
      Name: e.name,
      Username: e.username,
      Email: e.email
  }));
  
  const columns = [
    {
      title: 'key',
      dataIndex: 'key',
      key: 'key',
    },
    {
      
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Username',
      dataIndex: 'Username',
      key: 'Username',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
  ];
  
  return (
    <div className="App">
      <Table dataSource={dataSource} columns={columns} />;
    </div>
    
  );
}

export default App;
