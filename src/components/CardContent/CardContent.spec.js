import React from 'react';
import { render } from '@testing-library/react';

import CardContent from './CardContent';

describe('CardContent', () => {
	it('matches screenshot', () => {
		const user = {
			gender: 'male',
			name: { title: 'Mr', first: 'Dwayne', last: 'Carr' },
			location: {
				street: { number: 5997, name: 'New Street' },
				city: 'Kinsale',
				state: 'Carlow',
				country: 'Ireland',
				postcode: 47945,
				coordinates: { latitude: '20.0798', longitude: '-72.6822' },
				timezone: { offset: '+4:30', description: 'Kabul' }
			},
			email: 'dwayne.carr@example.com',
			login: {
				uuid: '42a97806-e8ff-4de0-a264-ab745dfd34fa',
				username: 'happyfish704',
				password: 'bowser',
				salt: '5F09Z6d6',
				md5: '035c246faf6e3252139552495a4efc14',
				sha1: '25b5ccfcf8c9615d77b20ed6dae6cc80551f026e',
				sha256: '1fc39344a560336390cf20118724e0363e9324bf3e8a50ddc1049fb78f1a090d'
			},
			dob: { date: '1983-02-16T11:42:09.700Z', age: 38 },
			registered: { date: '2010-01-11T11:33:23.053Z', age: 11 },
			phone: '031-898-2396',
			cell: '081-649-8810',
			id: { name: 'PPS', value: '6858462T' },
			picture: {
				large: 'https://randomuser.me/api/portraits/men/28.jpg',
				medium: 'https://randomuser.me/api/portraits/med/men/28.jpg',
				thumbnail: 'https://randomuser.me/api/portraits/thumb/men/28.jpg'
			}
		};
		const birthDate = user.dob.date;
		const { asFragment } = render(<CardContent user={user} birthDate={birthDate} />);

		expect(asFragment()).toMatchSnapshot();
	});
});
