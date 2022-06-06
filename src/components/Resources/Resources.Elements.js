import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResourcesContainer = styled.div`
    height: 100%;
	
	@media screen and (max-width: 568px) {
		height: 100vh;
	}
`;

export const ResourceTitle = styled.h2`
	text-align: center;
	font-size: 26px;
	line-height: 1.06;
	letter-spacing: 0.2rem;
	padding: 0.8rem;
	color: dodgerblue;
`;

export const ResourceTextWrapper = styled.div`
	position: relative;
	padding-top: 20px;
`;

export const ResourceWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
    padding: 20px;


	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 2rem;
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
        padding: 30px;
	}
`;

export const ResourceColumn = styled(Link)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: #FFF;
	text-decoration: none;
	padding: 1rem;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-radius: 10px;

    &:hover {
		border: 0.5px solid dodgerblue;
		font-weight: 900;
    }
`;

export const ResourceImageWrapper = styled.div`
	margin: 1rem;
	border-radius: 50%;
	border: 2px solid dodgerblue;
	padding: 1.3rem;    
    
    &:hover {
        // transform: scale(1.20);
        // transition: all 0.3s ease-out;
    }
`;

export const ResourceName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;
	color: dodgerblue;	
	background: transparent;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;

export const ResourceText = styled.p`
	margin: 0.5rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #000;
	background: transparent;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;