import React,{ useState,useEffect,useContext } from 'react'
import Backend from '../api/Backend';
import Status  from '../api/Status';

function ProductForm(){
	
	const backend     = Backend();
	const statContext = useContext(Status);
	const DEFAULT_IMG = 'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=360&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%20360w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=740&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%20740w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=826&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%20826w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=900&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%20900w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=996&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%20996w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=1060&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%201060w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=1380&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%201380w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=1480&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%201480w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=1800&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%201800w,%20https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=2000&t=st=1661237280~exp=1661237880~hmac=94b092d0dedd92ebe10526eb60954ca3372018cf7545a98581260ba04e3cf51a%202000w';
	const [defaultData,setDefaultData] = useState({id:'',title:'',price:'',image:DEFAULT_IMG,fid:false});
	
	useEffect(()=>{
			const path = window.location.pathname !== '/admin/add' ? true : false;
			const id   = path === true ? window.location.pathname.split('/')[2] : false;
			const data = id !== false  ? statContext.dataContext.filter((dat,key) => {
															return Number(dat.id) === Number(id) 
														}) : false
		
console.log('useEffect',data);
			data !== false && setDefaultData(data[0])
			return(()=>{
				return data;
			})								 
	},[statContext.dataContext]);
	
	function handleInput(event){
		setDefaultData({...defaultData ,[event.target.name]:event.target.value});
	}

	async function handleFileSubmit(event){
		const file_data = event.target.files[0];
	    const form_data = new FormData();
	    form_data.append('file', file_data);
	    form_data.append('user','renier');

	    const header = {
	    	method :'POST',
	    	body   : form_data 
	    };

	    backend.uploadFile(header).then((res)=>{
	    	console.log(res.uri);
	    	setDefaultData({
	    		id:defaultData.id,
	    		title:defaultData.title,
	    		price:defaultData.price,
	    		image:res.uri,
	    		fid:Number(res.fid)
	    	})
	    });

		// console.log(event.target.files)
		// setDefaultData({
		// 	id:defaultData.id,
		// 	title:defaultData.title,
		// 	price:defaultData.price,
		// 	image:'https://4.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/7004100121.jpg',
		// 	fid:123})
	}

	function handleSubmit(){
		console.log(defaultData)
		const data = {
				id   : defaultData.id,
	    		title: defaultData.title,
	    		price: defaultData.price,
	    		fid  : defaultData.fid
		}
		console.log(data)
		backend.EditContent(data)
	}

	// console.log(defaultData)

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
					      <input type="text" className="form-control" placeholder="Product A" onChange={handleInput} name="title"  value={defaultData && defaultData.title} />
					    </div>
					  </div>
					  <div className="mb-3 row">
					    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Price</label>
					    <div className="col-sm-2">
					      <input type="number" className="form-control" placeholder="Php 100" onChange={handleInput} name="price" value={defaultData && defaultData.price } />
					    </div>
					  </div>
					   <div className="mb-3 row">
					    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Image</label>
					    <div className="col-sm-10">
  							<input className="form-control" type="file" id="formFile" name="file" onChange={handleFileSubmit} />
					    </div>
					     <div className="col-sm-10 m-5">
  							<img src={defaultData ? backend.host+defaultData.image : DEFAULT_IMG} className="img-file" alt="no-data"/>
					    </div>
					  </div>
					   <div className="m-3 row">
					    <button className="btn btn-primary btn-lg m-1" onClick={handleSubmit}>{defaultData ? 'UPDATE' : 'ADD' }</button>
					   </div>
				  </div>
				</div>
		  </div>
		</>
	)
}

export default ProductForm;
