import styled from 'styled-components';
import homev2 from '../assets/homev2.jpg';

export const HomeStyle = styled.div`
  /* -------------------------------------------
                 HEADER 
------------------------------------------- */
  .bg-overlay {
    background-image: url(${homev2});
    background-position: center;
    background-size: cover;
  }
  .slider-item {
    display: flex;
    height: 500px;
    align-items: center;
    justify-content: space-between;
  }
  /* -------------------------------------------
                 NAV
------------------------------------------- */
  nav.header-nav {
    display: flex;
    justify-content: space-between;
    a {
      margin-right: 25px;
    }
  }

  /* -------------------------------------------
                 MAIN
------------------------------------------- */
  main {
    padding: 100px 0;
  }
  .title-view-wrap {
    display: flex;
    justify-content: space-between;
  }
  .slick-dots {
    position: absolute;
    top: -65px;
    width: 68px;
    height: 30px;
    right: -14px;

    li {
      margin: 0;
    }
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: var(--yellowGreen);
    font-size: 12px;
  }
  .slick-dots li button:before {
    opacity: 1;
    font-size: 12px;
    color: var(--white);
  }
  .onTV-wrap {
    margin-top: 130px;
  }
  .tab-list {
    padding-left: 0;
    cursor: pointer;
  }
  .tab-content {
    min-height: 350px;
  }
  .tab-list-item {
    display: inline-block;
    list-style: none;
    margin-bottom: 40px;
    padding: 0.5rem 2rem;
    padding-left: 0;
  }
  .tab-list-active {
    color: var(--yellowGreen);
  }
  /* -------- MOVIE Trailer and CELEB section --------- */
  .celeb-trailer-wrap {
    display: flex;
    justify-content: space-between;
    padding: 80px 0;
  }
  .trailer {
    width: 75%;
    margin-right: 5%;
    .title-wrap {
      display: flex;
      justify-content: space-between;
    }
  }
  .spotLight {
    width: 20%;
  }
  .trailer-carousel {
    display: flex;
    justify-content: space-between;

    /* next and prev buttons  */
    .slick-prev,
    .slick-next {
      transform: rotate(90deg);
      margin: 14px auto;
      position: initial;
    }
    .slick-slider {
      width: 300px;
    }
    .slick-slider .slick-track,
    .slick-slider .slick-list {
      text-align: center;
    }
    .slick-slide.slick-active.slick-current {
      background: var(--blue);
    }
  }
  .control {
    width: 350px;
    .slide-item {
      width: 100%;
      display: flex !important;
      align-items: center;
      justify-content: center;
      padding: 13px 0;
      .slide-bg {
        margin-left: 24px;
        min-width: 93px;
        height: 50px;
        background-position: top;
        background-size: cover;
      }
      h6 {
        width: 100%;
        margin: 0 20px;
        text-align: left;
      }
    }
  }
  .trailer-carousel .youtube {
    min-width: 600px;
    .player-wrapper {
      position: relative;
      padding-top: 80.25%; /* Player ratio: 100 / (1280 / 720) */
    }
    .react-player {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  /* -------------------------------------------
                 FOOTER
------------------------------------------- */
  footer {
    margin-top: 1000px;
  }
`;
