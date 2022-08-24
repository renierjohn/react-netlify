
const data = [
	{id:1 , title:'Product1' , price:12 ,  image:'https://4.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/0455063184.jpg' } , 
	{id:2 , title:'Product2' , price:100 ,  image:'https://1.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/6293643549.jpg' }, 
	{id:3 , title:'Product3' , price:400 ,  image:'https://4.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/7004100121.jpg' },		
]

// const HOST             = 'http://localhost:8888';
const HOST             = 'https://code-ph.com';

const FILE_ENPOINT     = '/api/rest/file';
const CONTENT_ENDPOINT = '/api/rest/products';
const EDIT_ENDPOINT    = '/api/rest/{nid}/edit';
const AUTH_ENDPOINT    = '/api/v1/auth/token';
const AUTH_STAT_ENDPOINT = '/api/rest/auth/state';

const TOKEN         = localStorage.token;
const UID           = localStorage.uid;

function Backend(){
	return {
		host:HOST,
		data:data,
		token:TOKEN,
		uid:UID,
		auth: async (datas)=>{
			const header = {
				 method : 'POST',
				 body   : JSON.stringify({
				 	login:datas.mail,
				 	password:datas.pass
				 })
			} 
			const data   = await axios_plus(HOST+AUTH_ENDPOINT,header);
			console.log('setloin:',data);
			return data;
		},
		checkLogin:async ()=>{
			const data = await axios_plus(HOST+AUTH_STAT_ENDPOINT);
			console.log('checkLogin:',data);
			return data;
		},
		uploadFile: async (header) =>{
			const data = await axios_plus(HOST+FILE_ENPOINT,header);
			console.log('checkLogin:',data);
			return data;
		},
		FetchContent: async ()=>{
			const data = await axios_plus(HOST+CONTENT_ENDPOINT);
			console.log('getContent:',data);
			return data;
		},
		EditContent: async (datas)=>{
			const FINAL_EDIT_ENDPOINT = EDIT_ENDPOINT.replace('{nid}',datas.id);
			const header              = {
				method         : 'POST',
				headers        : {
					'X-AUTH-TOKEN' : TOKEN ? TOKEN : '',
					'REQUEST-ID'   : UID   ? UID   : 0,
				},
				body : JSON.stringify(datas),
			}
		console.log(datas,FINAL_EDIT_ENDPOINT,header)
			const data = await axios_plus(HOST+FINAL_EDIT_ENDPOINT,header);
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
