import styled from 'styled-components';

export const AppStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=DM+Serif+Display&display=swap');
  font-family: 'DM Serif Display', serif;
  color: white;
  /* -------------------------->  global style   <--------------------------- */
  .container {
    max-width: 96%;
    width: 900px;
    margin: 0 auto;
  }
  h3 {
    text-decoration: uppercase;
    font-size: 2.5rem;
    padding: 10px 0;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
  p {
    line-height: 1.4;
    color: #c1c0c0;
    font-size: 1.5rem;
    letter-spacing: 1;
  }
`;
