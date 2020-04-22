import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  margin-top: -160px;
`;

export const SocialDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 3%;
  z-index: 995;
`;

export const ZapContainer = styled.div`
  margin-left: -1vw;

  @media (max-width: 550px) {
    margin-left: -15vw;
  }

  a {
    position: relative;
    display: inline-block;
    span {
      position: absolute;
      z-index: 999;
      margin: 0 auto;
      left: 0;
      right: 0;
      top: 25%;
      text-align: center;
      width: 80%;
      font-size: 22px;
      font-weight: bold;
      color: #f7f7f7;
      @media (max-width: 550px) {
        font-size: 4vw;
      }
    }
    img {
      width: 80%;
      @media (max-width: 550px) {
        width: 60%;
      }
    }
  }
`;
