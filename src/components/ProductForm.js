

function ProductForm(){
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
					    <label for="staticEmail" className="col-sm-2 col-form-label">Title</label>
					    <div className="col-sm-10">
					      <input type="text" className="form-control" placeholder="Product A" />
					    </div>
					  </div>
					  <div className="mb-3 row">
					    <label for="staticEmail" className="col-sm-2 col-form-label">Price</label>
					    <div className="col-sm-2">
					      <input type="number" className="form-control" placeholder="Php 100" />
					    </div>
					  </div>
					   <div className="mb-3 row">
					    <label for="staticEmail" className="col-sm-2 col-form-label">Image</label>
					    <div className="col-sm-10">
  							<input class="form-control" type="file" id="formFile" />
					    </div>
					  </div>
					   <div className="m-3 row">
					    <button className="btn btn-primary btn-lg m-1">Submit</button>
					   </div>
				  </div>
				</div>
		  </div>
		</>
	)
}

export default ProductForm;
