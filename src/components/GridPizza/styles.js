import styled from "styled-components";

export const GridItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 5px 5px 10px #999;
  width: 220px;
  position: relative;

  section {
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    transition: 0.5s;

    h1 {
      font-size: 24px;
      margin-left: 15px;
      font-weight: 800;
    }

    ul {
      list-style: none;
      margin-left: 15px;

      p {
        color: rgba(0, 0, 0, 0.7);
        margin-top: 10px;
        text-align: justify;
        margin-left: -15px;
        padding: 15px;
        font-size: 1rem;
      }

      h1 {
        display: flex;
        align-items: center;
        font-size: 1rem;
        margin-top: 20px;
        margin-left: 0;

        hr {
          background-color: #000;
          border: none;
          width: 30%;
          height: 2px;
          margin-left: 5px;
        }
      }
    }

    li {
      font-size: 1rem;
      margin-top: 10px;
      color: rgba(0, 0, 0, 0.7);
    }
  }

  .hide {
    opacity: 0;
    transition: 0.5s;
  }

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    z-index: 1;

    span {
      font-size: 20px;
      font-weight: bold;
      margin-left: 10px;
    }

    svg {
      cursor: pointer;
    }
  }

  @media (max-width: 550px) {
    margin: 0 25%;
  }
`;
