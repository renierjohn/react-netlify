import React from 'react'
import { Link } from "react-router-dom";

import Backend from '../api/Backend';

function Admin(){
	const datas = Backend();
	return (
	<>
  	<div className="row mb-3">
  		<div className="col-4">
  			<Link className="btn btn-success btn-lg m-1" aria-current="page" to="/admin/add">ADD PRODUCT</Link>
  		</div>
  	</div>
		<div className="row mb-3">
		<div className="col-lg">
			<ul className="list-group">
				{
					datas.map((data,key)=>{
						return <li className="list-group-item shadow-sm p-3 mb-2 bg-body rounded" key={key} id={data.id}>
						<div className="row"> 
								<div className="col-8">
									{data.title}
								</div>
								<div className="col-4">
									<Link   className="btn btn-primary btn-lg m-1" to={`/admin/${data.id}/edit`}>EDIT</Link>
									<button className="btn btn-warning btn-lg m-1">DELETE</button>
								</div>
							</div>
						</li>
					})
				}
			</ul>
		</div>
		</div>
	</>
	)
}

export default Admin;
