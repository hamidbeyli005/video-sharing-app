import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 5;
  background:yellow ;

`;
const Wrapper = styled.div``;


function App() {
  return (
    <Container>
      <Menu />

      <Main>
        <Navbar />
        <Wrapper>maın wrapper</Wrapper>
      </Main>
    </Container>
  );
}

export default App;
