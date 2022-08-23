import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import List   from './components/List';
import Admin  from './components/Admin';
import Login  from './components/Login';
import Form   from './components/ProductForm';

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
