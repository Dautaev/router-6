import { Routes, Route, Link } from "react-router-dom";
import { Features } from "./components/Features";
import { Home } from "./components/Home";
import { Contact } from './components/Contact';

function App() {
 
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="features" element={<Features />} /> 
        <Route path='Contact' element={<Contact/>} /> 
      </Routes>
      </>
  );
}

export default App;
