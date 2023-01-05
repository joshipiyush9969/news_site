import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Explore } from "./pages/Explore";
import { Home } from "./pages/Home";
import {NavProvider} from './context/NavBarContext';

export default function App() {
  return (
    <NavProvider>
    <Container >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore/:type" element={<Explore/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Container>
    </NavProvider>
  );
}
