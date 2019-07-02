import styled from 'styled-components';

export const MoviesStyle = styled.div`
  h3 {
    z-index: 9;
    padding-bottom: 10px;
  }
  .ch-1 {
    position: relative;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 90%);
  }
  .carousel-wrap {
    max-width: 95%;
    margin: 0 auto;
    min-height: 200px;
    margin-top: -30px;
    margin-bottom: 70px;

    img {
      min-height: 200px;
    }
    .slick-arrow {
      height: 100%;
    }
  }
  /* {=========================== MIDDLE PAGE VIDEO =============================} */
  .mid-page-vid {
    display: flex;
    height: 500px;
    align-items: center;
    justify-content: center;
    height: 561px;
    box-shadow: -7px 2px 80px -8px #2e2c2cb8;
    border-radius: 4px;
    .right-vid-content {
      max-width: 95%;
      margin: 0 auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 100%;
      .right-inner-content {
        margin: 0 auto;
        width: 300px;
      }
      img {
        width: 300px;
        margin: 0 auto;
        display: block;
      }
    }
    .btn-wrap {
      margin: 20px auto;
    }
  }
`;

export const SingleMovie = styled.div`
  height: 100vh;
  .player-wrapper {
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
