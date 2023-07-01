import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Mint from "./components/Mint";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/security" element={<Layout />} />
          <Route path="/faq" element={<Layout />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
