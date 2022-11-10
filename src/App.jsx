import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/home/index";
import { CardMain } from "./components/CardGmail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GuiaGmail" element={<CardMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
