import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import InfoPage from './pages/InfoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {



  return (
    <div>
      
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/countryinfo/:countryName' element={<InfoPage />}/>

        </Routes>
     </BrowserRouter>


    </div>
  );
}

export default App;
