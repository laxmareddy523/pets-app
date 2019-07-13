import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

describe('Checking app render without error', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});

describe('Checking app render correct kind of content', () => {
	
});
