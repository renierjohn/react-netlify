import React from 'react'
import Backend from '../api/Backend';

function List(){
	const datas = Backend();

	return (
	<>
		<div className="row mb-3">
		<div className="col-lg">
			<ul className="list-group">
				{
					datas.map((data,key)=>{
						return <li class="list-group-item" key={key} id={data.id}>{data.title}</li>
					})
				}
			</ul>
		</div>
		</div>
	</>
	)
}

export default List;
