import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./screens";
import Card from "./screens/card";
import Header from "./screens/header";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/details/:id" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
