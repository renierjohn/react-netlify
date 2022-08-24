import React,{useContext } from 'react'
import { Link } from "react-router-dom";

import Status  from '../api/Status';

function Header(){
	
	const statContext = useContext(Status);

	// console.log('header',statContext);

	return (
		<>
		<nav className="navbar navbar-expand-lg bg-gray mb-3">
			<div className="container-fluid">
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						 <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
						 <li className="nav-item"><Link className="nav-link " aria-current="page" to="/admin">Admin</Link></li>
					</ul>
					<div className="d-flex" role="search">
						{ 
							!statContext.isLogin ? <Link className="btn btn-outline-success" aria-current="page" to="/login">Login</Link> : <button className="btn btn-outline-success" onClick={()=>{statContext.setStatus(false)}}>Logout</button>
						}
		      </div>
				</div>
			</div>
		</nav>	
		</>
	)
}

export default Header;
