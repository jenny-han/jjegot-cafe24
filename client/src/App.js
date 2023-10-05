import Mainpage from "./pages/Mainpage";
import { Routes, Route } from 'react-router-dom'
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
      <Routes>
        <Route path="/" element={< Mainpage />} />
        <Route path="/signup" element={ <SignUp />} />

        <Route path="/login" element={ <LoginPage />} />
        <Route path="/register" element={ <RegisterPage /> } />

      </Routes>
  );
}

export default App;
