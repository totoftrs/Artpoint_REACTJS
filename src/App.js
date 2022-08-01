import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artist from './Artist';
import Artists from './Artists';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Artists/>} exact />
            <Route path="artist/:id" element={<Artist/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
