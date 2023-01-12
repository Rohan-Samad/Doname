import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Search from './components/Search';
import ContexNotes from './state/ContexNotes';
import About from './components/About'
import Footer from './components/Footer';
function App() {
  return (
<BrowserRouter>
    <ContexNotes>
    <Navbar />
    <Routes>
      <Route path="/" element={<Search />}></Route>
       
        <Route path="/about" element={<About />}></Route>
    </Routes>
   <Footer/>
    </ContexNotes>
  </BrowserRouter>
  );
}

export default App;
