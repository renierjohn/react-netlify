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
import React,{useState,useMemo,useEffect} from 'react'

function App() {

  const backend                       = Backend();
  const [dataContext, setDataContext] = useState([]);
  const [isLogin, setStatus]          = useState(false);
  
  useEffect(()=>{
    return(()=>{
      backend.checkLogin().then((res)=>{setStatus(res)});
      backend.FetchContent().then((res) =>{setDataContext(res)});
    })
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const value = useMemo(
    () => ({ isLogin, setStatus,dataContext,setDataContext  }), 
    [isLogin,dataContext]
  );

  return (
      <div className="App">
        <StatusA.Provider value={value} >
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
        </ StatusA.Provider>
      </div>
  );
}

export default App;
