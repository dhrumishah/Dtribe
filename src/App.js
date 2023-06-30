import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Layout from "./components/layout";
import Mint from "./components/Mint";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<Layout />} />
          <Route path="/security" element={<Layout />} />
          <Route path="/faq" element={<Layout />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/" exact element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
