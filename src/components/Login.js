import React from 'react'

function Login(){
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
					    <label for="staticEmail" className="col-sm-2 col-form-label">Email/Username</label>
					    <div className="col-sm-10">
					      <input type="text" className="form-control" placeholder="email@example.com/Username" />
					    </div>
					  </div>
					  <div className="mb-3 row">
					    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
					    <div className="col-sm-10">
					      <input type="password" className="form-control" id="inputPassword" />
					    </div>
					   </div>
					   <div className="m-3 row">
					    <button className="btn btn-primary btn-lg m-1">Login</button>
					   </div>
				  </div>
				</div>
		  </div>
		</>
	)
}

export default Login;
