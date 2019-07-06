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
    color: var(--yellowGreen);
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
    margin-right: 10rem;
    .title-wrap {
      display: flex;
      justify-content: space-between;
    }
  }
  .spotLight {
    width: 25%;
    .spotlight-content {
      display: flex;
      align-items: center;
      margin: 30px 0;
      h6 {
        margin-bottom: 4px;
        &:hover {
          color: var(--yellowGreen);
        }
      }
      span {
        font-family: 'Dosis', sans-serif;
        font-size: 1.4rem;
        color: var(--pTag);
        text-transform: uppercase;
        font-weight: 400;
      }
      img {
        width: 70px;
        height: 70px;
        border-radius: 3px;
        object-fit: cover;
        margin-right: 20px;
      }
    }
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
      min-width: 300px;
      width: 100%;
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
      h4.desc {
        width: 100%;
        margin: 0 20px;
        text-align: left;
        cursor: pointer;
      }
    }
  }
  .trailer-carousel .youtube {
    min-width: 600px;
    .player-wrapper {
      position: relative;
      padding-top: 81.25%; /* Player ratio: 100 / (1280 / 720) */
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
