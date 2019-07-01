import styled from 'styled-components';

export const NavBarStyle = styled.div`
  /* --------------------------> navbar style <--------------------------- */
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
    span {
      display: flex;
    }
    li {
      margin-left: 25px;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;
