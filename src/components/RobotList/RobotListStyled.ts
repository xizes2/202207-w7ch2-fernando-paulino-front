import styled from "styled-components";

const RobotsListStyled = styled.ul`
  display: flex;
  justify-content: center;

  h2 {
    text-align: center;
    margin: 0;
  }

  li {
    border: 1px solid black;
    list-style: none;
    padding: 20px;
  }

  .robot__skills {
    display: flex;
    flex-direction: column;
    padding: 5px;
  }
`;

export default RobotsListStyled;
