import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  background-color: #fff;
  z-index: 5;
  border-bottom: 0.3px solid #e1e1e1;
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  img {
    width: 30px;
    height: 30px;
    margin-right: 0.2em;
  }
  span {
    font-weight: bold;
    font-size: 1.2em;
  }
`;

const RightHeader = styled.div`
  font-size: 15px;
  opacity: 0.7;
  span {
    margin-left: 3em;
  }
`;

const Header = () => {
  return (
    <Container>
      <SLink to={"/"}>
        <img alt="" src={require("@/assets/images/logo.png")} />
        <span>Bigyeong Moto</span>
      </SLink>
      <RightHeader>
        <span>Service</span>
        <span>News</span>
        <span>Touring</span>
      </RightHeader>
    </Container>
  );
};

export default Header;
