import styled from "styled-components";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const Main = styled.main`
  width: 75%;
  margin: 0 auto;
`;

const Header = styled.header`
  width: 75%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #fff;
  padding: 0 2rem;
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
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

const Home = () => {
  return (
    <Main>
      <Header>
        <LeftHeader>
          <img alt="" src={require("@/assets/images/logo.png")} />
          <span>Bigyeong Moto</span>
        </LeftHeader>
        <RightHeader>
          <span>Service</span>
          <span>News</span>
          <span>Touring</span>
        </RightHeader>
      </Header>
      <FirstSection />
      <SecondSection />
    </Main>
  );
};

export default Home;
