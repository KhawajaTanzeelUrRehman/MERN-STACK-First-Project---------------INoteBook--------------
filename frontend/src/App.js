import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>

        <Router>
          <Navbar />
          <Alert message={"message"} />
          <div className="container my-3">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>

    </>
  );
}

export default App;
