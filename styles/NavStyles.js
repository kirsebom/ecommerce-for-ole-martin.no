import styled from "styled-components";

export const NavStyles = styled.nav`
	height: 15vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1rem;
	a {
		font-size: 1.2rem;
	}
	@media (max-width: 800px) {
		a {
			font-size: 0.8rem;
		}
	}
`;

export const NavItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;
	div {
		margin-left: 3rem;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h3 {
		font-size: 1rem;
		padding: 0.25rem;
	}
	@media (max-width: 800px) {
		h3 {
			font-size: 0.8rem;
		}
	}
	@media (max-width: 600px) {
		div {
			margin-left: 1rem;
		}
		h3 {
			font-size: 0.6rem;
		}
	}
	@media (max-width: 400px) {
		h3 {
			font-size: 0.4rem;
		}
	}
	svg {
		font-size: 1.5rem;
		cursor: pointer;
	}
	span {
		background: #ff2626;
		color: white;
		width: 1.3rem;
		height: 1.3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		font-size: 0.75rem;
		position: absolute;
		right: -10%;
		top: -20%;
		pointer-events: none;
	}
	@media (max-width: 600px) {
		svg {
			font-size: 1rem;
		}
	}
`;
