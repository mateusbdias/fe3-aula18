import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./telas/Home";
import Details from "./telas/Details";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:cep" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}