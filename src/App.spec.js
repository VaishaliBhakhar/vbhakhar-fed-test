import React from 'react';
import App from './App';

describe('App', () => {
	it('renders the App', () => {
		const actual = shallow(<App />);
		expect(actual.get(0)).toMatchSnapshot();
	});
});
