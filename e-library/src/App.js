import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import Home from './Components/Home';
import Login from './Components/Login';
import Profile from './Components/Profile';
import PublicRoute from './Utils/PublicRoute';
import PrivateRoute from './Utils/PrivateRoute';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>

        <div className="content">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />
            <Route path="/profile" element={<PrivateRoute> <Profile /> </PrivateRoute>} />
          </Routes>
        </div>
      </Router>

  

    </div>
  );
}

export default App;
