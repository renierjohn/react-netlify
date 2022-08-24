
const data = [
	{id:1 , title:'Product1' , price:12 ,  image:'https://4.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/0455063184.jpg' } , 
	{id:2 , title:'Product2' , price:100 ,  image:'https://1.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/6293643549.jpg' }, 
	{id:3 , title:'Product3' , price:400 ,  image:'https://4.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/7004100121.jpg' },		
]

const HOST             = 'http://localhost:8888';
// const HOST             = 'https://code-ph.com';

const FILE_ENPOINT     = '/api/rest/file';
const CONTENT_ENDPOINT = '/api/rest/products';
const AUTH_ENDPOINT    = '/api/v1/auth/token';

function Backend(){
	return {
		data:data,
		uploadFile: async () =>{
			const data = await axios_plus(HOST+FILE_ENPOINT);
			console.log('checkLogin:',data);
			return data;
		},
		checkLogin:async ()=>{
			const data = await axios_plus(HOST+AUTH_ENDPOINT);
			console.log('checkLogin:',data);
			return data;
		},
		FetchContent: async ()=>{
			const data = await axios_plus(HOST+CONTENT_ENDPOINT);
			console.log('getContent:',data);
			return data;
		}
	}
}

async function axios_plus(url,header = {}){
	const data = header ? await fetch(url,header).then((res) => res.json()).then((res) => {return res}).catch(()=>{return false}) : await fetch(url).then((res) => res.json()).then((res) => {return res}).catch(()=>{return false});
	return data;
}

export default Backend;
