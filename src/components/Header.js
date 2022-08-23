import React from 'react'

function Header(){
	return (
		<>
		<nav className="navbar navbar-expand-lg bg-light mb-3">
		<div className="container-fluid">
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					 <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
					 <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Admin</a></li>
				</ul>
				<div className="d-flex" role="search">
	        <button className="btn btn-outline-success" type="submit">Login</button>
	      </div>
			</div>
		</div>
		</nav>	
		</>
	)
}

export default Header;
