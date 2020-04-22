import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, TextDiv, MainText, ReverseText } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <TextDiv>
        <ReverseText>EXPLORE</ReverseText>
        <div>
          <MainText>O QUE VOCÊ</MainText>
        </div>
        <div>
          <MainText>TEM DE </MainText>
          <ReverseText>ÚNICO,</ReverseText>
        </div>
        <MainText>SEJA DIFERENTE.</MainText>
      </TextDiv>
      <Footer />
    </Container>
  );
}
