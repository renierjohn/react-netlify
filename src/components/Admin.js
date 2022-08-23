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
						<div className="row"> 
								<div className="col-8">
									{data.title}
								</div>
								<div className="col-4">
									<button className="btn btn-primary">EDIT</button>
									<button className="btn btn-warning">DELETE</button>
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
