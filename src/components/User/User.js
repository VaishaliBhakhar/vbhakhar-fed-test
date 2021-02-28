import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Card from '../Card';

const LoadButton = styled.button`
	background-image: linear-gradient(to right, #f09819 0%, #edde5d 51%, #f09819 100%);
	margin: 10px;
	padding: 15px 45px;
	text-align: center;
	text-transform: uppercase;
	transition: 0.5s;
	background-size: 200% auto;
	color: white;
	box-shadow: 0 0 20px #eee;
	border-radius: 10px;
	border-color: azure;
`;
const ButtonDiv = styled.div`
	margin-top: 3%;
	text-align: center;
`;
export default function User() {
	const [userList, setUserList] = React.useState([]);
	const getUserData = noOfUsers => {
		axios
			.get(`https://randomuser.me/api/?results=${noOfUsers}`)
			.then(res => {
				const users = res.data.results;
				setUserList([...userList, ...users]);
			})
			.catch(err => console.log(err));
	};

	useEffect(() => {
		if (!userList.length) getUserData(1);
	}, [userList]);

	return (
		userList.length > 0 && (
			<>
				<Card userList={userList} />{' '}
				<ButtonDiv>
					<LoadButton type="button" onClick={() => getUserData(5)}>
						Load More Users
					</LoadButton>
				</ButtonDiv>
			</>
		)
	);
}
