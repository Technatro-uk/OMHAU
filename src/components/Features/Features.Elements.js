import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FeaturesContainer = styled.div`
    height: 600px;
    background: #F3DAFF;
	
	@media screen and (max-width: 568px) {
		height: 800px;
	}
`;

export const FeatureTitle = styled.h2`
    padding-top: 20px;
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
	color: dodgerblue;
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 0.4rem;
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin-top: 1rem;
	grid-gap: 1rem;
    padding: 30px;


	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(2, 1fr);
        padding: 30px;
	}
`;

export const FeatureColumn = styled(Link)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: #FDFDFD;
	text-decoration: none;
	padding: 10px;
	box-shadow: 0 0 32px 8px #d0d0d0;
	border-radius: 10px;

    &:hover {
        background: dodgerblue;
		color: white;
    }
`;

export const FeatureImageWrapper = styled.div`
	margin: 1rem 0;
	border-radius: 50%;
	border: 2px solid #000;
	padding: 15px;    
    
    &:hover {
        transform: scale(1.20);
        transition: all 0.3s ease-out;
    }
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;
	color: darkorchid;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;

export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #000;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;