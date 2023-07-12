import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/login/Login';
import Rulebook from "./Pages/Game/rulebook/Rulebook";
import Play from "./Pages/Game/play/Play";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/rulebook" element={<Rulebook/>}></Route>
          <Route path="/game" element={<Play/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
