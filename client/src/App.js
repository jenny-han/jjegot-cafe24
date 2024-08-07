import Mainpage from './pages/Mainpage';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashBoardPage from './pages/DashBoardPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<DashBoardPage />} />
    </Routes>
  );
}

export default App;
