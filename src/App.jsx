import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/page";

function App() {
  return (
    <>
      <h1>It is working</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
