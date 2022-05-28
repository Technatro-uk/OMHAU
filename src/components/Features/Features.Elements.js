import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FeaturesContainer = styled.div`
    height: 100%;
	
	@media screen and (max-width: 568px) {
		height: 100vh;
	}
`;

export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.2rem;
	margin: auto;
	color: dodgerblue;
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding-top: 20px;
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 0.5rem;
    padding: 20px;


	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
        padding: 30px;
	}
`;

export const FeatureColumn = styled(Link)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: #FFF;
	text-decoration: none;
	padding: 1rem;
	box-shadow: 0 0 24px 8px #d0d0d0;
	border-radius: 10px;

    &:hover {
		border: 2px solid dodgerblue;
    }
`;

export const FeatureImageWrapper = styled.div`
	margin: 1rem;
	border-radius: 50%;
	border: 2px solid dodgerblue;
	padding: 1.3rem;    
    
    &:hover {
        // transform: scale(1.20);
        // transition: all 0.3s ease-out;
    }
`;

export const FeatureName = styled.h3`
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

export const FeatureText = styled.p`
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