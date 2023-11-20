import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
