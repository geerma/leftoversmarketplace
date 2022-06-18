import "./App.css";

import { Welcomepage, Homepage, Listingpage, Searchpage, Profilepage } from "./Pages";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcomepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/listingpage" element={<Listingpage />} />
          <Route path="/searchpage" element={<Searchpage />} />
          <Route path="/profilepage" element={<Profilepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
