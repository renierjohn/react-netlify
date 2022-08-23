import { createContext } from 'react';

const Status = createContext({
	isLogin   : false,
	setStatus : () => {},
	dataContext:[],
	setDataContext: () => {}
});

export default Status;