import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardMain } from "./components/CardGmail";
import { Home } from "./page/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GuiaGmail" element={<CardMain />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
