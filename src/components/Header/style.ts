import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 12.5rem;
  width: 100%;

  background: ${(props) => props.theme["gray-700"]};

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    color: ${(props) => props.theme.blue};
    font-weight: 700;

    strong {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;
