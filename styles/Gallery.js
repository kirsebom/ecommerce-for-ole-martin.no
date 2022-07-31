import styled from "styled-components";
export const Gallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 2rem;
	@media (max-width: 1050px) {
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	}
`;

export const SpinnerContainer = styled.div`
	display: flex;
	width: 100%;
	height: 80vh;
	justify-content: center;
	align-items: center;
`;

export const Spinner = styled.div`
	display: inline-block;
	width: 80px;
	height: 80px;
	&::after {
		content: " ";
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid #000;
		border-color: #000 transparent #000 transparent;
		animation: spinnerAnimation 1.2s linear infinite;
	}
	@keyframes spinnerAnimation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
