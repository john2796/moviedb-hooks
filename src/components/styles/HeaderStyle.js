import styled from 'styled-components';

export const HeaderStyle = styled.div`
  .player-wrap {
    position: relative;
    padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
  }
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
