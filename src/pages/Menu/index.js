import React from 'react';
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosArrowUp,
} from 'react-icons/io';
import { scroller } from 'react-scroll';
import Image from 'react-bootstrap/Image';
import history from '../../services/history';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import pizza from '../../assets/cheesecake.png';

import {
  Container,
  Body,
  MenuBar,
  GridPizzas,
  GridItem,
  GridTitle,
  HomeButton,
  MenuTitle,
  MenuSubTitle,
  MenuItem,
  MenuRespo,
} from './styles';

export default function Menu() {
  const handleScroll = name => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 100,
      smooth: true,
      spy: true,
      containerId: 'containerElement',
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
              history.push('/');
            }}
            style={{
              cursor: 'pointer',
            }}
          >
            <IoIosArrowBack size={35} />
            <span>VOLTAR</span>
          </HomeButton>
          <ul>
            <MenuTitle onClick={() => handleScroll('amp')}>
              AS MAIS PEDIDAS
            </MenuTitle>
            <MenuItem>BRESINHA</MenuItem>
            <MenuItem>CASA BRANCA</MenuItem>
            <MenuItem>DIFERENTONA</MenuItem>
            <MenuItem>PORTUGA</MenuItem>
            <MenuItem>OREO</MenuItem>
            <MenuTitle onClick={() => handleScroll('msps')}>
              MONTE SUA PIZZA SALGADA
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
          <button type="button" onClick={() => handleScroll('amp')}>
            AS MAIS PEDIDAS
          </button>
          <button type="button" onClick={() => handleScroll('msps')}>
            MONTE SUA PIZZA
          </button>
          <IoIosArrowForward size={35} />
        </MenuRespo>
        <GridPizzas id="containerElement">
          <GridTitle name="amp">AS MAIS PEDIDAS</GridTitle>
          <div>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
          </div>
          <GridTitle name="msps">MONTE SUA PIZZA SALGADA</GridTitle>
          <div>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
            <GridItem>
              <Image src={pizza} />
              <div>
                <span>BRESINHA</span>
                <IoIosArrowUp size={30} onClick={() => alert('teste')} />
              </div>
            </GridItem>
          </div>
        </GridPizzas>
      </Body>
      <Footer />
    </Container>
  );
}
