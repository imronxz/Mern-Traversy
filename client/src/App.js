import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/';
import { Dashboard, Register, Login } from './pages';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/daftar" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
