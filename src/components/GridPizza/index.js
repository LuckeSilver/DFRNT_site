import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

import { GridItem } from "./styles";
import Image from "react-bootstrap/Image";

import pizzasDB from "./pizzasDB";

const GridPizzas = () => {
  const [pizzas, setPizzas] = useState(
    pizzasDB.map((pizza) => ({ ...pizza, hide: true }))
  );

  const handleModalChange = (pizza) => {
    setPizzas(
      pizzas.map((p) => {
        if (pizza.id === p.id) {
          p.hide = !p.hide;
        }

        return p;
      })
    );
  };

  const getCardClassName = (hide) => (hide ? "hide" : undefined);

  return (
    <>
      {pizzas.map((pizza) => (
        <GridItem>
          <section className={getCardClassName(pizza.hide)} key={pizza.id}>
            <h1>{pizza.title}</h1>
            <ul>
              <h1>
                INGREDIENTES <hr />
              </h1>
              {pizza.ingredientes.map((ingrediente) => (
                <li>{ingrediente}</li>
              ))}
            </ul>
            <ul>
              <h1>
                INFORMAÇÕES <hr />
              </h1>
              <p>{pizza.informacoes}</p>
            </ul>
          </section>

          <>
            <Image src={pizza.image} />

            <div className="title">
              <span>{pizza.title}</span>

              <IoIosArrowUp
                size={30}
                onClick={() => handleModalChange(pizza)}
              />
            </div>
          </>
        </GridItem>
      ))}
    </>
  );
};

export default GridPizzas;
