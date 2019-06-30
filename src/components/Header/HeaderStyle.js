import styled from 'styled-components';

export const HeaderStyle = styled.div`
  /* --------------------------> Slide div && slide Content <--------------------------- */
  .slide-image-wrap {
    background-repeat: no-repeat;
    background-position: cover;
    background-size: cover;
    cursor: pointer;
  }
  .slide-content {
    padding-top: 550px;
    .slide-content-inner {
      padding: 100px 0 50px 40px;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 88%);
      h2 {
        font-size: 3rem;
        letter-spacing: 2px;
        margin: 10px 0;
      }
    }
  }
`;
