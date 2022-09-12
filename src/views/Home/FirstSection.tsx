import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  text-align: center;
  padding-top: 30vh;
`;

const MainText = styled.div`
  font-size: 3.5rem;
  font-weight: bolder;
  line-height: 5rem;
`;

const FirstSection = () => {
  return (
    <Container>
      <MainText>
        Faster, Farther, Freer
        <br />
        With My Bike
      </MainText>
    </Container>
  );
};

export default FirstSection;
