import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Home from './Home';
import Congratulations from "./congratulations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/congratulations" element={<Congratulations/>} />
      </Routes>
    </Router>
  );
}

export default App;