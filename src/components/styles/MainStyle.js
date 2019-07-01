import styled from 'styled-components';

export const MainStyle = styled.div``;

export const MoviesStyle = styled.div`
  h3 {
    color: white;
    font-size: 2.5rem;
    font-weight: 500;
    z-index: 9;
    padding-bottom: 10px;
  }
  .ch-1 {
    position: relative;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 90%);
  }
  .carousel-wrap {
    min-height: 200px;
    margin-top: -30px;
    margin-bottom: 70px;

    img {
      min-height: 200px;
    }
    .slick-arrow {
      height: 100%;
      .slick-prev::before {
        background: initial;
        color: red;
      }
    }
  }
`;
