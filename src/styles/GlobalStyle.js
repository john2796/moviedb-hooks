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
`;
