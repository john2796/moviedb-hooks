import styled from 'styled-components';

export const MovieStyle = styled.div`
  .sp-movie-wrap {
    background-repeat: no-repeat;
    background-position: cover;
    background-size: cover;
    .sp-top-icons {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      padding-top: 80px;
      span {
        padding: 2%;
      }
    }
    .sp-content {
      padding-top: 50vh;
      .sp-inner {
        padding-left: 5%;
        padding-bottom: 30vh; 
        background: linear-gradient(to bottom rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 94%);
      }
    }
    .sp-flex {
      border: 1px solid pink;
      img {
        width: 380px;
        height: 400px;
        border-radius: 5px;
      }
      h2 {
        font-size: 3rem;
        letter-spacing: 2px;
        margin: 10px 0;
      }
    }
  }
`;
