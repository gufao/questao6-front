import styled from 'styled-components';
import { shade } from 'polished';

const appColor = '#04d361';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 600px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px 0px;

  p {
    font-size: 70px;
    font-weight: 500;
    color: #fff;margin-left: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  
  flex-direction: column;
  width: 100%;
  max-width: 700px;

  
  textarea {
    padding: 16px;
  }

  input {
    padding: 16px;
    margin-top: 8px;
  }

  button {
    display: flex;
    padding: 16px 0px;
    margin-top: 8px;
    border-radius: 4px;
    background: ${appColor};
    align-items: center;
    justify-content: center;
    color: #fff;
    border: 0;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.3, appColor)}
    }
  }
`;

export const Options = styled.div`
  display: flex;
  
  button {
    border: 0;
    padding: 16px 24px;
    margin: 16px;
    border-radius: 8px;
    background: ${appColor};
    transition: background 0.2s;
    color: #fff;
     &:hover {
       background: ${shade(0.3, appColor)}
     }
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 16px;
  background: #fff;
  padding: 8px;
  max-width: 700px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    p {
      margin-left: 16px;
    }
  }

  section {
    flex-wrap: wrap;
    max-width: 700px;

    p {
      overflow-wrap: break-word;
      max-width: 700px;
    }
  }
`;