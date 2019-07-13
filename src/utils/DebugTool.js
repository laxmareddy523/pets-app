import * as debug from 'debug';

let store, log, error;

if ( typeof debug === 'function'){
	store = debug(`pactera_test:${ process.env.NODE_ENV }:store`);
	log = debug(`pactera_test:${ process.env.NODE_ENV }:log`);
	error = debug(`pactera_test:${ process.env.NODE_ENV }:error`);
} else {
	store = (...args) => {
		console.log(`pactera_test:${ process.env.NODE_ENV }:store`, args);
	};
	log = (...args) => {
		console.log(`pactera_test:${ process.env.NODE_ENV }:log`, args);
	};
	error = (...args) => {
		console.log(`pactera_test:${ process.env.NODE_ENV }:error`, args);
	}
}



export { store, log, error };