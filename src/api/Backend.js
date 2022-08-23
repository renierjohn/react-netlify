
const data = [
	{id:1 , title:'Product1' , price:12 ,  image:'https://4.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/0455063184.jpg' } , 
	{id:2 , title:'Product2' , price:100 ,  image:'https://1.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/6293643549.jpg' }, 
	{id:3 , title:'Product3' , price:400 ,  image:'https://4.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/7004100121.jpg' },		
]


function Backend(){
	return {
		data:data,
		uploadFile:() =>{
			return true;
		},
		checkLogin:  ()=>{
			fetch('https//renifysite.com').then((res) => res.json()).then((res) => {return res}).catch(() 	=> {return false});
			console.log('checkLogin:')
			return true;
		},
		FetchContent: ()=>{
			fetch('https//renifysite.com/api/').then((res) => res.json()).then((res) => {return res}).catch(() 	=> {return false});
			console.log('fetchContent:')
			return data;
		}
	}
}

export default Backend;