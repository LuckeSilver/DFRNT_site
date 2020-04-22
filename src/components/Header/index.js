import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';

import history from '../../services/history';
import logo from '../../assets/logo_pizza.png';

import {
  Container,
  MenuButton,
  OrderButton,
  LogoButton,
  HiddenMenu,
} from './styles';

export default function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <Container>
      <LogoButton onClick={() => history.push('/')} active={menuStatus}>
        <Image src={logo} />
      </LogoButton>
      <div>
        <a
          rel="noopener noreferrer"
          href="http://pedir.to/diferentepizza"
          target="_blank"
        >
          <OrderButton>PEÇA AGORA</OrderButton>
        </a>
        <HiddenMenu active={menuStatus}>
          <button
            type="button"
            onClick={() => {
              history.push('/menu');
            }}
          >
            MENU
          </button>
          <button type="button">
            <a
              rel="noopener noreferrer"
              href="https://www.google.com.br/maps/place/Diferente+Pizza/@-22.9253393,-43.2478272,17z/data=!3m1!4b1!4m5!3m4!1s0x997e0c39a21e9f:0x75ff001bf1be95ed!8m2!3d-22.9253443!4d-43.2456332"
              target="_blank"
            >
              ENDEREÇO
            </a>
          </button>
        </HiddenMenu>
        <MenuButton
          active={menuStatus}
          onClick={() => {
            setMenuStatus(!menuStatus);
          }}
        >
          <span aria-hidden="true" />
        </MenuButton>
      </div>
    </Container>
  );
}
