import LandingPage from 'pages/landing-page';
import Quiz from 'pages/quiz';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <div className="text-center mt-4 mb-3 mb-md-5">
        <Link to="/" className="navbar-brand">
          <strong className="fs-3 font-monospace">
            MY LOGO <span className="text-success">{'{}'}</span>
          </strong>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
};

export default App;
