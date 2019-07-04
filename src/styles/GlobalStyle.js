import styled from 'styled-components';

export const GlobalStyle = styled.div`
  .container {
    width: 1170px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  a {
    text-decoration: none;
    color: var(--white);
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  .selectedLink {
    color: var(--yellowGreen);
  }
  h3 {
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .darkbg {
    background: var(--darkGray);
  }
  .lightBg {
    background: var(--lightGray);
  }
  /* movie trailer title */
  h6 {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
  }
  /* movie vertical carousel */
  .time {
    display: block;
    font-size: 1rem;
    margin-top: 4px;
    font-weight: 100;
    color: gray;
  }
`;
