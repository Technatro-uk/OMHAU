import styled from 'styled-components';
import { Row } from '../../globalStyles';
import Slider from 'react-slick';

export const CarouselContainer = styled.div`
	width: 100%;
	background: #F3DAFF;
    padding: 40px 0; 
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;
	height: 100vh;

	@media screen and (max-width: 768px) {
		padding-right: 30px;
		padding-left: 30px;
	}

`;

export const CarouselImage = styled.img`
	width: 100%;
	height: 100px;
	border-radius: 5px 5px 0 0;
	object-fit: cover;
	vertical-align: middle;
	
`;

export const ImageWrapper = styled.div`
	width: 90%;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 5px;
	outline: none;
	height: 15rem;
	background: #FFF;
	text-align: center;
`;

export const ButtonContainer = styled(Row)`
	& svg {
		margin: 0.5rem;
		cursor: pointer;
	}

	& svg:hover {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
        background: #C5C8EC;
		border-radius: 50%;
	}

	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;

	.slick-track {
		display: flex;
		padding: 20px;
		gap: 2rem;
	}

	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}

	.slick-list {
		overflow: hidden;
	}
`;

export const CardButton = styled.button`
	background-color: dodgerblue;
	font-size: 1.5rem;
	padding: 5px;
	color: #fff;
	cursor: pointer;
	width: 100%;
	border: 1px solid transparent;
	border-radius: 50%;
	display: inline-flex;
	align-items: center;

	&:hover {
		background-color: #D364E7;
		transition: background-color 0.3s ease-in-out;
	}
		
	@media screen and (max-width: 768px) {
		font-size: 0.8rem;
		padding: 5px;
	}
`;