import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardContent from '../CardContent';

const Container = styled.div`
	margin-top: 3%;
	margin-left: 10%;
	display: block;
	line-height: 1.43;
	box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
	letter-spacing: 0.01071em;
	border-radius: 15px;
	font-size: 5em;
	transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	width: 80%;
	@media only screen and (max-width: 767px) and (min-width: 400px) {
		width: 50%;
		margin-left: 25%;
	}
	@media only screen and (max-width: 414px) and (min-width: 320px) {
		width: 80%;
		margin-left: 25%;
	}
`;

const HeadCenter = styled.span`
	margin: 10px;
	display: block;
	font-size: 12px;
	@media (max-width: 767px) {
		font-size: 22px;
	}
`;
const HeadCenterDiv = styled.div`
	flex: 1 1 auto;
	text-align: center;
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-weight: 400;
	line-height: 1.43;
	letter-spacing: 0.01071em;
	color: rgba(255, 255, 255, 0.7);
`;
const HeadContentDiv = styled.div`
	background-image: url(${props => props.image});
	height: 0;
	padding-top: 100%;
	display: block;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 50%;
`;
const BodyDiv = styled.div`
	padding: 16px;
	background-color: #ffffff;
	width: 100%;
`;

const BodyContent = styled.div`
	font-size: 0.875rem;
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-weight: 400;
	line-height: 2.2;
	letter-spacing: 0.01071em;
	// color: rgba(255, 255, 255, 0.7);
	color: #00000066;
`;

const CardBlocksDiv = styled.div`
	display: flex;
	@media (max-width: 767px) {
		display: block;
	}
`;

const CardLeftDiv = styled.div`
	background-image: linear-gradient(#d69b06, #ce9c1f, #ecc76b);
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	@media (max-width: 767px) {
		display: block;
		border-bottom-left-radius: unset;
		border-top-right-radius: 15px;
	}
	@media only screen and (max-width: 1400px) and (min-width: 768px) {
		width: 50%;
	}
	@media only screen and (max-width: 767px) and (min-width: 400px) {
		width: 100%;
	}
	@media only screen and (max-width: 414px) and (min-width: 320px) {
		width: 100%;
	}
`;
export default function Card(props) {
	Card.propTypes = {
		userList: PropTypes.instanceOf(Array).isRequired
	};
	const { userList } = props;
	return (
		<div style={{ justifyContent: 'center' }}>
			{userList.length > 0 &&
				userList.map(user => {
					const birthDate = new Intl.DateTimeFormat('en-GB', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit'
					}).format(new Date(user.dob.date));

					return (
						<Container key={user.cell}>
							<CardBlocksDiv>
								<CardLeftDiv>
									<HeadContentDiv image={user.picture.large} />
									<div style={{ display: 'flex' }}>
										<HeadCenterDiv>
											<HeadCenter fontSize="12px">
												<span style={{ padding: '2px' }}>{user.name.title}</span>
												<span style={{ padding: '2px' }}>{user.name.first}</span>
												<span style={{ padding: '2px' }}>{user.name.last}</span>
											</HeadCenter>
											<HeadCenter fontSize="10px">
												<span style={{ padding: '2px' }}>
													<i className="fa fa-map-marker mr-5" aria-hidden="true" style={{ marginRight: '6px' }} />
													{user.location.country}
												</span>
											</HeadCenter>
										</HeadCenterDiv>
									</div>
								</CardLeftDiv>
								<BodyDiv>
									<BodyContent>
										<CardContent user={user} birthDate={birthDate} />
									</BodyContent>
								</BodyDiv>
							</CardBlocksDiv>
						</Container>
					);
				})}
		</div>
	);
}
