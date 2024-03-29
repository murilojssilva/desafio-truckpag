import styled from "styled-components";

export const Container = styled.header`
  background: ${(props) => props.theme.colors.primary};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--shape);
    background: var(--transparent);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
  img {
    width: 100px;
    height: 50px;
    display: inline-block;
  }
`;
