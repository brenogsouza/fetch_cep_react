import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  @media screen {
    padding: 10px;
  }
  h2 {
    margin-bottom: 20px;
  }
  .paper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
    margin: 20px 20px;
    height: 100%;
  }
  .button__salvar {
    background: #102d;
    margin-top: 20px;
    height: 56px;
    color: #fff;
    width: 100%;
    max-width: 350px;
    border: 1px solid #ccc;
    &:hover {
      background: #102d;
      opacity: 0.8;
      border: 1px solid #ccc;
    }
  }
  @media (max-width: 600px) {
    .paper {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 10px;
      margin: 0;
      height: 100%;
    }
    .button__salvar {
      width: 100%;
      max-width: 100%;
    }
  }
`;
