import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-top: -1.875rem;

  input {
    flex: 1;
    width: 100%;
    background: ${(props) => props.theme["gray-500"]};
    padding: 1rem;

    border: 1px solid ${(props) => props.theme["gray-700"]};
    border-radius: 8px;

    color: ${(props) => props.theme["gray-100"]};
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    background: ${(props) => props.theme["blue-dark"]};
    padding: 1rem;

    border: 0;
    border-radius: 8px;
    cursor: pointer;

    color: ${(props) => props.theme["gray-100"]};
    font-size: 0.875rem;
    font-weight: 700;

    &:not(:disabled):hover {
      background: ${(props) => props.theme.blue};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 700;
    font-size: 0.875rem;

    span {
      background: ${(props) => props.theme["gray-400"]};

      font-size: 0.75rem;
      color: ${(props) => props.theme["gray-200"]};

      padding: 0.125rem 0.5rem;
      border-radius: 999px;

      margin-left: 0.5rem;
    }
  }

  #created {
    color: ${(props) => props.theme.blue};
  }

  #finished {
    color: ${(props) => props.theme.purple};
  }
`;

export const NoTasksLoggedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  padding: 4rem 1.5rem;
  color: ${(props) => props.theme["gray-300"]};
  font-size: 1rem;

  border-top: 1px solid ${(props) => props.theme["gray-400"]};
  border-radius: 8px;

  .bold {
    font-weight: bold;
  }
`;

export const MainContainer = styled.main`
  max-width: 46rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding-bottom: 2rem;
`;
