import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-right: 3%;
  }

  @media (max-width: 550px) {
    background: #fff;
    box-shadow: 0 5px 5px 0 grey;
  }
`;

export const MenuButton = styled.button`
  display: inline-block;
  z-index: 100;
  right: 30px;
  top: 30px;
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  padding: 0;
  line-height: 0.6;
  text-align: center;

  span {
    display: inline-block;
    position: relative;
    height: ${(props) => (props.active ? "0px" : "4px")};
    width: 34px;
    background: #000;
    vertical-align: middle;

    &:before,
    &:after {
      display: inline-block;
      position: absolute;
      content: "";
      height: 4px;
      background: #000;
      transition: all 200ms;
    }
    &:before {
      top: ${(props) => (props.active ? "0px" : "-13px")};
      left: ${(props) => (props.active ? "0px" : "5px")};
      width: ${(props) => (props.active ? "34px" : "24px")};
      transform: ${(props) => (props.active ? "rotate(45deg)" : "")};
    }
    &:after {
      top: ${(props) => (props.active ? "0px" : "13px")};
      left: ${(props) => (props.active ? "0px" : "5px")};
      width: ${(props) => (props.active ? "34px" : "23px")};
      transform: ${(props) => (props.active ? "rotate(-45deg)" : "")};
    }
  }

  &:focus {
    outline: none;
  }

  &:hover > span:after,
  &:hover > span:before {
    width: 34px;
    left: 0;
  }
`;

export const OrderButton = styled.button`
  background: #000;
  color: #f7f7f7;
  border-radius: 10px;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  transition: 0.5s;
  z-index: 100;
  white-space: nowrap;

  &:hover {
    border: 2px solid #000;
    background: #f7f7f7;
    color: #000;
  }

  @media (max-width: 550px) {
    font-size: 3vw;
    padding: 1vw;
  }
`;

export const LogoButton = styled.button`
  padding-top: 2%;
  margin-left: 3%;
  font-size: 18px;
  color: #000;
  font-weight: bold;

  img {
    @media (max-width: 550px) {
      max-width: 80%;
    }
  }
`;

export const HiddenMenu = styled.div`
  display: flex;
  width: ${(props) => (props.active ? "20vw" : "0px")};
  transition: all 800ms;
  z-index: 1;

  @media (max-width: 550px) {
    font-size: 3vw;
    width: ${(props) => (props.active ? "40vw" : "0px")};
  }

  button {
    opacity: ${(props) => (props.active ? 1 : 0)};
    width: ${(props) => (props.active ? "100%" : "0px")};
    transition: ${(props) => (props.active ? "all 500ms" : "all 100ms")};
    transition-delay: ${(props) => (props.active ? "400ms" : "100ms")};
    font-size: 24px;
    color: #000;
    font-weight: bold;
    margin: ${(props) => (props.active ? "0" : "0 -10px")};

    a {
      color: inherit;
      text-decoration: inherit;
    }

    @media (max-width: 550px) {
      font-size: 3vw;
    }
  }
`;
