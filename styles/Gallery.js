import styled from "styled-components";
export const Gallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 2rem;
	@media (max-width: 1050px) {
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	}
`;
