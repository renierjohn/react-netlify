import { createContext } from 'react';

const Status = createContext({
	isLogin   : false,
	// setStatus : () => {},
});

export default Status;