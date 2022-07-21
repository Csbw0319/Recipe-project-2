import Pages from "./Pages/Pages";
import { BrowserRouter, Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import styled from "styled-components";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav>
        <Logo to={'/'} >{<FaHome />}</Logo>
      </Nav>
      <h1>Deeeeelish</h1>
      <Search />
      <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
text-decoration: none;
color: black;
`

const Nav = styled.div`
display: flex
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
  position: relative;
top: 130px;
left: 30px;
}
`

export default App;
