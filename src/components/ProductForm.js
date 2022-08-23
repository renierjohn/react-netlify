import React,{ useState,useEffect } from 'react'
import Backend from '../api/Backend';

function ProductForm(){
	
	const backend     = Backend();
	const DEFAULT_IMG = 'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=360&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%20360w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=740&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%20740w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=826&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%20826w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=900&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%20900w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=996&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%20996w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=1060&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%201060w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=1380&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%201380w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=1480&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%201480w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=1800&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%201800w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=2000&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%202000w';
	const [defaultData,setDefaultData] = useState([]);

	useEffect(()=>{
			const path = window.location.pathname !== '/admin/add' ? true : false;
			const id   = path ? window.location.pathname.split('/')[2] : [];
			const data = id ? backend.data.filter((dat,key) => {
												return dat.id === Number(id) 
											}) : false
		
			data !== false && setDefaultData(data[0])
			console.log(data)
			return(()=>{
				return true
			})								 
	},[backend.data]);
	
	return (
		<>
		<div className="container">
				<div className="row">
					<div className="col-lg">
						<h3>Product Form</h3>
					</div>
				</div>
				<div className="row">	
					<div className="col-lg shadow-lg p-3 mb-2 bg-body rounded">
						<div className="mb-3 row">
					    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Title</label>
					    <div className="col-sm-10">
					      <input type="text" className="form-control" placeholder="Product A" value={defaultData && defaultData.title} />
					    </div>
					  </div>
					  <div className="mb-3 row">
					    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Price</label>
					    <div className="col-sm-2">
					      <input type="number" className="form-control" placeholder="Php 100" value={defaultData && defaultData.price} />
					    </div>
					  </div>
					   <div className="mb-3 row">
					    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Image</label>
					    <div className="col-sm-10">
  							<input className="form-control" type="file" id="formFile" />
					    </div>
					     <div className="col-sm-10 m-5">
  							<img src={defaultData ? defaultData.image : DEFAULT_IMG} className="img-file" alt="no-data"/>
					    </div>
					  </div>
					   <div className="m-3 row">
					    <button className="btn btn-primary btn-lg m-1">{defaultData ? 'UPDATE' : 'ADD' }</button>
					   </div>
				  </div>
				</div>
		  </div>
		</>
	)
}

export default ProductForm;
