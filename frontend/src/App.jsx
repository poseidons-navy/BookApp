import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./HomePage/navbar";
import HomePage from "./HomePage/homepage";
function App() {

  return (
    <div >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />

        </Routes>

      </Router>
    </div>
  )
}

export default App
