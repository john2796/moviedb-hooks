import styled from 'styled-components';

export const GlobalStyle = styled.div`
  .container {
    width: 1250px;
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
  h2 {
    font-family: 'Dosis', sans-serif;
    font-size: 2.4rem;
    color: var(--white);
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  /* spotlight celeb title */
  .sb-title {
    font-family: 'Dosis', sans-serif;
    font-size: 1.8rem;
    color: var(--white);
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 1px solid #405266;
  }
  h4 {
    font-family: 'Dosis', sans-serif;
    font-size: 1.4rem;
    color: var(--white);
    font-weight: bold;
  }

  /* movie trailer title and spotlight celebrities*/
  h6 {
    font-family: 'Dosis', sans-serif;
    font-size: 1.4rem;
    color: var(--white);
    font-weight: bold;
    cursor: pointer;
  }
  p {
    color: var(--pTag);
    font-size: 1.4rem;
  }

  /* movie vertical carousel */
  .time {
    display: block;
    font-size: 1rem;
    margin-top: 4px;
    font-weight: 100;
  }
  .darkbg {
    background: var(--darkGray);
  }
  .lightBg {
    background: var(--lightGray);
  }
  .selectedLink {
    color: var(--yellowGreen);
  }
`;
