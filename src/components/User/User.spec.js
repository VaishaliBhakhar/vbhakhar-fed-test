import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import User from './User';

describe('CardContent', () => {
	it('matches screenshot', () => {
		const { asFragment } = render(<User />);
		expect(asFragment()).toMatchSnapshot();
	});

	// it('should fetch single user', () => {
	// 	const { getByText } = render(<User />);
	// 	const btn = getByText(/submit/i);
	// 	console.log(btn);
	// 	// fireEvent.click(getByText(/Load More Users/i));
	// });
});
