import styled from 'styled-components';

export const MainStyle = styled.div`
  .movie-and-shows-wrap {
    padding: 100px 0;
    text-align: center;
    a {
      text-decoration: none;
      color: white;
      margin-right: 20px;
    }
  }
`;

export const MoviesStyle = styled.div`
  .carousel-wrap {
    min-height: 500px;
    img {
      border: 1px solid red;
      min-height: 200px;
    }
    .carousel-item {
      margin-right: 100px;
    }
  }
`;
