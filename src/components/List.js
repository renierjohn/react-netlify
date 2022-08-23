import React,{ useContext } from 'react'
// import Backend from '../api/Backend';
import Status  from '../api/Status';

function List(){
	// const backEnd     = Backend();
	// const datas       = backEnd.data;
	const statContext = useContext(Status);
	const datas       = statContext.dataContext;
	return (
	<>
		<div className="row mb-3">
		<div className="col-lg">
			<ul className="list-group">
				{
					datas.map((data,key)=>{
						return <li className="list-group-item shadow-sm p-3 mb-2 bg-body rounded" key={key} id={data.id}>{data.title}</li>
					})
				}
			</ul>
		</div>
		</div>
	</>
	)
}

export default List;
