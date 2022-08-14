import styled from "styled-components";

const RobotsListStyled = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  margin: 0 20px;

  .robot__skills {
    display: flex;
    flex-direction: column;
    padding: 5px;
    text-align: left;
  }

  .robot-item__image {
    align-self: center;
  }

  h2 {
    text-align: center;
    margin: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    list-style: none;
    padding: 20px;
    text-align: center;
    border-radius: 30px;
    margin: 20px 0;
    box-shadow: 10px 10px 10px #00000077;
  }
`;

export default RobotsListStyled;
