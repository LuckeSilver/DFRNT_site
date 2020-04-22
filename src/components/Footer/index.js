import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';

import { Container, SocialDiv, ZapContainer } from './styles';
import zap from '../../assets/zap.png';

export default function Footer() {
  return (
    <Container>
      <ZapContainer>
        <a
          rel="noopener noreferrer"
          href="http://wa.me/5521964802852"
          target="_blank"
        >
          <Image src={zap} />
          <span>CHAMA NO ZAP</span>
        </a>
      </ZapContainer>
      <SocialDiv>
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/diferentepizza/"
          target="_blank"
        >
          <FaInstagram
            size={55}
            style={{
              background: '#000',
              color: '#f7f7f7',
              border: '8px solid #000',
              borderRadius: '50%',
              marginBottom: '15px',
            }}
          />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.facebook.com/diferentepizza/"
          target="_blank"
        >
          <FaFacebook
            size={60}
            style={{
              color: '#000',
              background: '#f7f7f7',
              borderRadius: '60%',
            }}
          />
        </a>
      </SocialDiv>
    </Container>
  );
}
