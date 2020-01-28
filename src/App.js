import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Users from './components/Users';
import { getHash } from './utils/utils';
import qs from 'qs';
import './App.css';

function App() {
  const [params, setParams] = useState(qs.parse(getHash()));
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);
  return (
    <div>
      <Nav />
      {params.view === undefined && <Home />}
      {params.view === 'users' && <Users />}
    </div>
  );
}

export default App;
