import styled from "styled-components";
import bg from "../../assets/bg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 550px) {
    background-size: 130%;
    background-position: center 30%;
  }
`;

export const TextDiv = styled.div`
  width: 400px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-left: 3%;
  margin-top: 15vh;
  @media (max-width: 550px) {
    width: 280px;
    margin-top: 30vh;
  }
`;

export const MainText = styled.span`
  color: #000;
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 6vw;
  }
`;

export const ReverseText = styled.span`
  color: #fff;
  background: #000;
  padding: 5px 12px;
  font-weight: bold;
  font-size: 42px;

  @media (max-width: 768px) {
    font-size: 6vw;
  }
`;
