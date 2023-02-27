import styled from "styled-components";

interface ListItem {
  checked?: boolean;
}

export const ListContainer = styled.ul`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["gray-500"]};
  border: 1px solid ${(props) => props.theme["gray-400"]};
  border-radius: 8px;
`;

export const Item = styled.li<ListItem>`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  width: 100%;

  p {
    flex: 1;
    text-decoration: ${(props) =>
      props.checked === true ? "line-through" : "inherit"};
    color: ${(props) =>
      props.checked === true ? props.theme["gray-300"] : ""};
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .check {
    color: ${(props) =>
      props.checked === true
        ? props.theme["purple-dark"]
        : props.theme["blue-dark"]};
  }

  .check:hover {
    color: ${(props) =>
      props.checked === true ? props.theme.purple : props.theme.blue};
  }

  .delete {
    color: ${(props) => props.theme["gray-300"]};
    padding: 2px;
    border-radius: 8px;
  }

  .delete:hover {
    color: ${(props) => props.theme.danger};
    background-color: ${(props) => props.theme["gray-400"]};
  }
`;
