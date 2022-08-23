import React,{ useContext,useState } from 'react'
import Status  from '../api/Status';

function Login(){
	
	const statContext									 = useContext(Status);
	const [defaultData,setDefaultData] = useState([]);

	const disabled = statContext.isLogin ? 'disabled' : '';

	function handleInput(event){
			setDefaultData({...defaultData ,[event.target.name]:event.target.value});
	}

	function handleSubmit(){
	  statContext.setStatus(true); // global state
		console.log(defaultData)
	}

	// console.log('login',statContext,disabled);
	
	return (
		<>
		<div className="container">
				<div className="row">
					<div className="col-lg">
						<h3>LOGIN PORTAL</h3>
					</div>
				</div>
				<div className="row">	
					<div className="col-lg shadow-lg p-3 mb-2 bg-body rounded">
						<div className="mb-3 row">
					    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email/Username</label>
					    <div className="col-sm-10">
					      <input type="text" className="form-control" disabled={disabled} placeholder="email@example.com/Username" onChange={handleInput} name="mail" value={defaultData && defaultData.mail} />
					    </div>
					  </div>
					  <div className="mb-3 row">
					    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
					    <div className="col-sm-10">
					      <input type="password" className="form-control" disabled={disabled} onChange={handleInput} name="pass" value={defaultData && defaultData.pass} id="inputPassword" />
					    </div>
					   </div>
					   <div className="m-3 row">
					    <p>{statContext.isLogin ? 'Already Login' : 'Not Logged In' }</p>
					    <button className="btn btn-primary btn-lg m-1" disabled={disabled}  onClick={handleSubmit}>Login</button>
					   </div>
				  </div>
				</div>
		  </div>
		</>
	)
}

export default Login;
