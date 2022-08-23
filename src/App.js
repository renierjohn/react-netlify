import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List   from './components/List';
import Admin  from './components/Admin';
import Login  from './components/Login';
import Form   from './components/ProductForm';
import Header from './components/Header';

import StatusA from './api/Status';
// import StatusB from './api/Status';
import Backend from './api/Backend';

import { Routes, Route } from "react-router-dom";
import React,{useState,useMemo} from 'react'


function App() {
  const backend                       = Backend();
  const [isLogin, setStatus]          = useState(backend.checkLogin());
  const [dataContext, setDataContext] = useState(backend.FetchContent());
  
  const value = useMemo(
    () => ({ isLogin, setStatus,dataContext,setDataContext  }), 
    [isLogin,dataContext]
  );

  // const valueA = useMemo(
  //   () => ({ isLogin, setStatus }), 
  //   [isLogin]
  // );

  // const valueB = useMemo(
  //   () => ({  dataContext,setDataContext }), 
  //   [dataContext]
  // );

  return (
      <div className="App">
        <StatusA.Provider value={value} >
          <Header />
          <div className="container">
          <Routes>
          {/*  <StatusB.Provider value={valueB} > */}
              <Route path="/" element={<List />} />
              <Route path="/admin" element={<Admin />} />
           {/* </StatusB.Provider> */} 
              <Route path="/admin/add" element={<Form />} />
              <Route path="/admin/:id/edit" element={<Form />} />
              <Route path="/login" element={<Login />} />
          </Routes>
          </div>      
        </ StatusA.Provider>
      </div>
  );
}

export default App;
