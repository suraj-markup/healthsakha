import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage/homepage.js"
import './App.css';

function App() {
  return (
    <>
    <div className='App'>
      <p>hellooooooooooooooooooooooooo</p>

      <Router>
        <switch>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          
          



        </Routes>

        </switch>
        
      </Router>
    </div>
    </>
  );
}

export default App;
