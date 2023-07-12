import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
