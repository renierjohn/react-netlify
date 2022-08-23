import React,{ useState } from 'react'
import { Link } from "react-router-dom";

function Header(){
	const [isLogin,setIsLogin] = useState(false);
	
	return (
		<>
		<nav className="navbar navbar-expand-lg bg-light mb-3">
		<div className="container-fluid">
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					 <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
					 <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/admin">Admin</Link></li>
				</ul>
				<div className="d-flex" role="search">
					{ 
						!isLogin ? <Link className="btn btn-outline-success" aria-current="page" to="/login">Login</Link> : <button className="btn btn-outline-success" onClick={()=>{ console.log('logout')}}>Logout</button>
					}
	      </div>
			</div>
		</div>
		</nav>	
		</>
	)
}

export default Header;
