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
      .sp-inner {
        background: linear-gradient(to bottom rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 94%);
      }
    }
    .sp-flex {
      .player-wrap {
        position: relative;
        padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
      }
      .react-player {
        position: absolute;
        top: 0;
        left: 0;
      }
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
    /* sp-flex ends here <--- */
  }
  /* sp-movie-wrap ends here <---- */
`;
