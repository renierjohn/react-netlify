import React from 'react'
import Backend from '../api/Backend';

function Admin(){
	const datas = Backend();
	return (
	<>
		<div className="row mb-3">
		<div className="col-lg">
			<ul className="list-group">
				{
					datas.map((data,key)=>{
						return <li className="list-group-item" key={key} id={data.id}>

							{data.title}
							<div className="d-flex">
								<button className="btn btn-primary">EDIT</button>
								<button className="btn btn-warning">DELETE</button>
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
