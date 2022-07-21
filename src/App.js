import Pages from "./Pages/Pages";
import { BrowserRouter, Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <h1>Deeeeelish</h1>
      <BrowserRouter>
      <Nav>
        <Logo to={'/'} ></Logo>
      </Nav>
      <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
text-decoration: none;
`

const Nav = styled.div`
display: flex
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`

export default App;
