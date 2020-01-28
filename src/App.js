import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Users from './components/Users';
import { getHash } from './utils/utils';
import axios from "axios"
import qs from 'qs';
import './App.css';
import Pager from './components/Pager';

function App() {

  const [data, setData] = useState([])
  const [users, setUsers] = useState([])
  const [params, setParams] = useState(qs.parse(getHash()));
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);

  const API = "https://acme-users-api-rev.herokuapp.com";

  useEffect(()=> {
    axios.get(`${API}/api/users/`).then(response => {
      console.log(response)
      const currentUsers = response.data.users
      const currentData = response.data
      setUsers(currentUsers)
      setData(currentData)
    })
  }, [])


  const clicked = (pageNum) => {
    axios.get(`${API}/api/users/${pageNum-1}`).then(response => {
      console.log(response)
      const currentUsers = response.data.users
      const currentData = response.data
      setUsers(currentUsers)
      setData(currentData)
    })
  }


  return (
    <div>
      <Nav />
      {params.view === undefined && <Home />}
      <Pager  clicked={clicked} data={data}/> 
      {params.view === 'users' && <Users users={users} />}
    </div>
  );
}

export default App;
