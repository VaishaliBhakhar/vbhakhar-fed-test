import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardBodyContainer = styled.div`
	display: flex;
`;

const CardBodyBox = styled.div`
	width: 50%;
	@media only screen and (max-width: 767px) and (min-width: 400px) {
		width: 100%;
	}
`;

const CardBodyContent = styled.div`
	padding: 2px;
	display: flex;
	word-break: break-all;
`;

const CardBodyBottomContent = styled.div`
	width: 100%;
	margin-top: 5%;
	display: flex;
	@media (max-width: 767px) {
		display: block;
	}
`;

const Icon = styled.i`
	line-height: 2.5;
	color: #fcc02c;
`;

export default function CardContent(props) {
	CardContent.propTypes = {
		user: PropTypes.shape([]).isRequired,
		birthDate: PropTypes.string.isRequired
	};
	const { user, birthDate } = props;
	return (
		<>
			<CardBodyContainer>
				<CardBodyBox>
					<CardBodyContent>Gender: {user.gender}</CardBodyContent>
					<CardBodyContent>Birthday: {birthDate}</CardBodyContent>
					<CardBodyContent>Age: {user.dob.age}</CardBodyContent>
				</CardBodyBox>
				<CardBodyBox>
					<CardBodyContent>
						Address: {user.location.street.number},{user.location.street.name}
					</CardBodyContent>
					<CardBodyContent>Pincode: {user.location.postcode}</CardBodyContent>
					<CardBodyContent>State: {user.location.state}</CardBodyContent>
				</CardBodyBox>
			</CardBodyContainer>
			<CardBodyBottomContent>
				<CardBodyBox>
					<CardBodyContent>
						<Icon className="fa fa-envelope mr-5 text-info" aria-hidden="true" />
						<CardBodyContent>{user.email}</CardBodyContent>
					</CardBodyContent>
				</CardBodyBox>
				<CardBodyBox>
					<CardBodyContent>
						<Icon className="fa fa-phone-square mr-5 text-success" aria-hidden="true" />
						<CardBodyContent>{user.phone}</CardBodyContent>
					</CardBodyContent>
				</CardBodyBox>
			</CardBodyBottomContent>
		</>
	);
}
