import Mainpage from "./pages/Mainpage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from "./pages/SignUp";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Mainpage />} />
        <Route path="/signup" element={ <SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
