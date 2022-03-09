import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home/Home'
//import Detail from './components/detail'

import './App.css';


const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
        <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
