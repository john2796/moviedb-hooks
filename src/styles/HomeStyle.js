import styled from 'styled-components';
import { relative } from 'path';
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
  nav.main-nav {
    margin-bottom: 50px;
    position: relative;
  }
  nav.main-nav a {
    margin: 25px 25px 25px 0;
    display: inline-block;
  }
  .slick-dots {
    position: absolute;
    top: -96px;
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
  /* -------------------------------------------
                 FOOTER
------------------------------------------- */
  footer {
    margin-top: 1000px;
  }
`;
