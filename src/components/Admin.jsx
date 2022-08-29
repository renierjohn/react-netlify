import React,{ useContext } from 'react'
import { Link } from "react-router-dom";

import Backend from '../api/Backend';
import Status  from '../api/Status';

function Admin(){
	
	const backend     = Backend();
	// const data        = backEnd.data;
	const statContext = useContext(Status);

	console.log('admin',statContext)
	
	function handleDelete(e){
		console.log(e.target.id)
		const data = statContext.dataContext;
		statContext.setDataContext(data.filter((dat)=>{
			return dat.id !== Number(e.target.id)
		}))
	}

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
					statContext.dataContext.map((data,key)=>{
						return <li className="list-group-item shadow-sm p-3 mb-2 bg-body rounded" key={key} id={data.id}>
						<div className="row"> 
								<div className="col-2">
									{data.title}
								</div>
								<div className="col-2">
									Php {data.price}
								</div>
								<div className="col-4">
									<img src={`${backend.host}${data.image}`} alt={data.title} className="img-small" />
								</div>
								<div className="col-4">
									<Link   className="btn btn-primary btn-lg m-1" to={`/admin/${data.id}/edit`}>EDIT</Link>
									<button className="btn btn-warning btn-lg m-1" id={data.id} onClick={handleDelete}>DELETE</button>
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
