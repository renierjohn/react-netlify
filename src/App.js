import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List   from './components/List';
import Admin  from './components/Admin';
import Login  from './components/Login';
import Form   from './components/ProductForm';
import Header from './components/Header';

import Status from './api/Status';

import { Routes, Route } from "react-router-dom";
import React,{useState,useMemo} from 'react'


function App() {
  const [isLogin, setStatus] = useState(false);
  const value = useMemo(
    () => ({ isLogin, setStatus }), 
    [isLogin]
  );

  return (
      <div className="App">
        <Status.Provider value={value} >
          <Header />
          <div className="container">
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/add" element={<Form />} />
            <Route path="/admin/:id/edit" element={<Form />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          </div>      
        </ Status.Provider>
      </div>
  );
}

export default App;
