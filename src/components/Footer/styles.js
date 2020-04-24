import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  margin-top: -132px;
`;

export const SocialDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 3%;
  z-index: 995;
`;

export const ZapContainer = styled.div`
  display: flex;
  margin-left: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  width: 200px;
  height: 50px;
  background-color: #4ced69;
  z-index: 1;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #f7f7f7;
    font-size: 20px;
    font-weight: 900;
    width: 100%;
    height: 100%;
    transition: 0.5s;
  }
  a:hover {
    border: 2px solid #000;
    border-radius: 15px;
    color: #000;
  }

  @media (max-width: 550px) {
    width: 150px;
    height: 40px;
    margin-left: 5px;

    a {
      font-size: 16px;
    }
  }
`;

// export const ZapContainer = styled.div`
//   @media (max-width: 550px) {
//     margin-left: -15vw;
//   }

//   a {
//     position: relative;
//     display: inline-block;
//     span {
//       position: absolute;
//       z-index: 999;
//       margin: 0 auto;
//       left: 0;
//       right: 0;
//       top: 25%;
//       text-align: center;
//       width: 80%;
//       font-size: 20px;
//       font-weight: bold;
//       color: #f7f7f7;
//       @media (max-width: 550px) {
//         font-size: 4vw;
//       }
//     }
//     img {
//       width: 80%;
//       @media (max-width: 550px) {
//         width: 60%;
//       }
//     }
//   }
// `;
