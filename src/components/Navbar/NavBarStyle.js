import styled from 'styled-components';

export const NavBarStyle = styled.div`
  ul {
    border: 1px solid pink;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    span {
      display: flex;
      li {
        margin-left: 25px;
      }
    }
  }
`;
