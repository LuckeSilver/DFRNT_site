import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { scroller } from "react-scroll";

import history from "../../services/history";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import GridPizza from "../../components/GridPizza";

import {
  Container,
  Body,
  MenuBar,
  HomeButton,
  MenuTitle,
  MenuSubTitle,
  MenuItem,
  MenuRespo,
  GridPizzas,
  GridTitle,
} from "./styles";

export default function Menu() {
  const handleScroll = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 100,
      smooth: true,
      spy: true,
      containerId: "containerElement",
      offset: 0,
    });
  };

  return (
    <Container>
      <Header />
      <Body>
        <MenuBar>
          <HomeButton
            onClick={() => {
              history.push("/");
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <IoIosArrowBack size={35} />
            <span>VOLTAR</span>
          </HomeButton>
          <ul>
            <MenuTitle onClick={() => handleScroll("amp")}>
              AS MAIS PEDIDAS
            </MenuTitle>
            <MenuItem>BRESINHA</MenuItem>
            <MenuItem>CASA BRANCA</MenuItem>
            <MenuItem>DIFERENTONA</MenuItem>
            <MenuItem>PORTUGA</MenuItem>
            <MenuItem>OREO</MenuItem>
            <MenuTitle onClick={() => handleScroll("msps")}>
              MONTE SUA PIZZA
            </MenuTitle>
            <MenuSubTitle>MOLHOS</MenuSubTitle>
            <MenuItem>TOMATE</MenuItem>
            <MenuItem>PESTO DE MANJERICÃO</MenuItem>
            <MenuItem>BECHAMEL</MenuItem>
            <MenuItem>MADEIRA</MenuItem>
            <MenuItem>BARBECUE</MenuItem>
          </ul>
        </MenuBar>
        <MenuRespo>
          <IoIosArrowBack size={35} />
          <button type="button" onClick={() => handleScroll("amp")}>
            AS MAIS PEDIDAS
          </button>
          <button type="button" onClick={() => handleScroll("msps")}>
            MONTE SUA PIZZA
          </button>
          <IoIosArrowForward size={35} />
        </MenuRespo>
        <GridPizzas>
          <GridTitle>AS MAIS PEDIDAS</GridTitle>
          <div>
            <GridPizza />
          </div>
        </GridPizzas>
      </Body>
      <Footer />
    </Container>
  );
}
