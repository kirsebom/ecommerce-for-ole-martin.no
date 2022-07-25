import styled from "styled-components";

export const DetailsStyle = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 5rem;
	img {
		width: 40%;
	}
	@media (max-width: 630px) {
		flex-direction: column;
		align-items: center;
		gap: 20px;
		img {
			width: 70%;
		}
	}
`;

export const ProductInfo = styled.div`
	width: 40%;
	button {
		font-size: 1rem;
		font-weight: medium;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}
	@media (max-width: 630px) {
		width: 70%;
	}
`;

export const Quantity = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem 0 em;
	button {
		background: transparent;
		border: none;
		display: flex;
		font-size: 1.5rem;
	}
	@media (max-width: 570px) {
		button {
			font-size: 1rem;
		}
	}
	@media (max-width: 415px) {
		button {
			font-size: 0.8rem;
		}
	}
	@media (max-width: 340px) {
		button {
			font-size: 0.6rem;
		}
	}
	p {
		width: 1rem;
		text-align: center;
	}
	span {
		color: var(--secondary);
	}
	@media (max-width: 340px) {
		font-size: 0.4rem;
	}
	svg {
		color: #494949;
	}
`;

export const Buy = styled.button`
	width: 100%;
	background: var(--primary);
	color: white;
	font-weight: 500;
`;
