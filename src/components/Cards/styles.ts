import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  form {
    text-align: center;
    position: absolute;
    justify-self: center;

    input {
      display: inline-block;
      padding-left: 2rem;
      padding-right: 2rem;
      position: relative;
      width: 80vw;
      height: 50px;
      font-size: 1.5rem;
      border-radius: 40px;
      outline: none;
      border: solid gray 2px;

      &::-webkit-search-decoration:hover,
      &::-webkit-search-cancel-button:hover {
        cursor: pointer;
      }
    }
  }

  h1 {
    text-align: center;
  }

  div {
    background: ${(props) => props.theme.colors.primary};
    padding: 1.5rem 2rem 4rem 2rem;
    border-radius: 3rem;
    margin: 7rem 2rem 0rem 2rem;

    div {
      h1 {
        color: var(--shape);
        font-size: 1rem;
      }
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;

      justify-content: space-between;
      path {
        color: var(--shape);
        cursor: pointer;
      }
    }
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      border-radius: 50%;
      width: 150px;
      height: 150px;
    }
  }
`;
export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    display: inline;
    padding: 6rem;

    button {
      color: ${(props) => props.theme.colors.text};
      background: ${(props) => props.theme.colors.primary};
      border-radius: 0.25rem;
      border: 0;
      padding: 1rem;
      margin: 0.5rem;
    }
  }
`;

export const Close = styled.button`
  -webkit-appearance: none;
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
  float: right;
`;

export const PTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  font-size: 2rem;
  font-family: "Mouse Memoirs", sans-serif;

  color: var(--red);

  td,
  th {
    border: 1px solid var(--red);
    text-align: left;
    padding: 8px;
  }

  td {
    border-bottom: 1pt solid var(--red);
    border-left: 0;
    border-right: 0;
    border-top: 0;
  }

  td:nth-child(2n) {
    text-align: right;
  }
`;

export const ModalContainer = styled.div`
  h1 {
    text-align: center;
    font-family: "Mouse Memoirs", sans-serif;
    color: var(--red);
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    padding: 2rem;
    width: 200px;
    height: 200px;
  }
`;
