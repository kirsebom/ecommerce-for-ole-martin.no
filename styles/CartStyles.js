import styled from "styled-components";
//Animation
const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
	position: fixed;
	right: 0;
	top: 0;
	height: 100vh;
	width: 100%;
	background: rgba(0, 0, 0, 0.4);
	z-index: 100;
	display: flex;
	justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
	width: 30%;
	background: #f1f1f1;
	padding: 2rem 5rem;
	overflow-y: scroll;
	position: relative;
	@media (max-width: 1700px) {
		width: 40%;
	}
	@media (max-width: 1030px) {
		padding: 2rem 1rem;
	}
	@media (max-width: 700px) {
		width: 50%;
	}
`;

export const Card = styled(motion.div)`
	box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.75);
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 1rem;
	/* overflow: hidden; */
	background: white;
	padding: 2rem;
	margin: 2rem 0rem;
	img {
		width: 8rem;
	}
	@media (max-width: 1700px) {
		padding: 1rem;
		img {
			width: 4rem;
		}
	}
	@media (max-width: 570px) {
		font-size: 0.5rem;
	}
	@media (max-width: 415px) {
		padding: 0.5rem;
		border-radius: 0.5rem;
		img {
			width: 2rem;
		}
	}
`;

export const CardInfo = styled(motion.div)`
	width: 50%;
	div {
		display: flex;
		justify-content: space-between;
	}
	@media (max-width: 570px) {
		h3 {
			font-size: 0.7rem;
		}
	}
	@media (max-width: 450px) {
		h3 {
			font-size: 0.5rem;
		}
	}
	@media (max-width: 340px) {
		h3 {
			font-size: 0.4rem;
		}
	}
`;

export const EmptyStyle = styled(motion.div)`
	/* For the empty cart */
	position: absolute;
	top: 0;
	/*  */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 80%;
	svg {
		font-size: 8rem;
		color: var(--secondary);
	}
	@media (max-width: 1400px) {
		h1 {
			font-size: 1rem;
		}
		svg {
			font-size: 4rem;
		}
	}
	@media (max-width: 1400px) {
		h1 {
			font-size: 0.8rem;
		}
		svg {
			font-size: 3rem;
		}
	}
`;

export const Checkout = styled(motion.div)`
	button {
		background: var(--primary);
		padding: 1rem 2rem;
		width: 100%;
		color: white;
		margin-top: 2rem;
		cursor: pointer;
		border: none;
	}
`;

export const Cards = styled(motion.div)``;
