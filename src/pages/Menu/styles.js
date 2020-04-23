import styled from "styled-components";
import { Element } from "react-scroll";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-left: 10px;

  @media (max-width: 550px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const MenuBar = styled.div`
  min-width: 15vw;
  margin-top: 50px;
  margin-right: 30px;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const HomeButton = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
  span {
    margin-left: 20px;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const MenuTitle = styled.li`
  padding: 5px 15px;
  font-size: 24px;
  font-weight: 800;
  cursor: pointer;
`;

export const MenuSubTitle = styled.li`
  padding: 5px 15px;
  font-size: 22px;
  font-weight: bold;
`;

export const MenuItem = styled.li`
  padding: 1px 15px;
  font-size: 20px;
  font-weight: 200;
  color: #999;
`;

export const GridPizzas = styled(Element)`
  width: 100%;
  overflow: auto;
  overflow-x: hidden;
  max-height: 80vh;
  margin-left: 20px;

  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #333;
  }

  div {
    display: inline-grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 30px;
    max-width: 75vw;
    padding: 0 10px;

    @media (max-width: 550px) {
      margin: auto;
    }
  }

  @media (max-width: 550px) {
    margin-left: 0px;
  }
`;

export const GridTitle = styled(Element)`
  font-size: 28px;
  font-weight: 900;
  margin-top: 50px;
  margin-bottom: 20px;
  white-space: nowrap;

  @media (max-width: 550px) {
    margin-left: 0px;
    margin-top: 12px;
    margin-bottom: 5px;
  }
`;

export const MenuRespo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background: #000;
  color: #fff;

  button {
    color: #fff;
    font-size: 4vw;
    font-weight: bold;
  }

  @media (min-width: 550px) {
    display: none;
  }
`;
