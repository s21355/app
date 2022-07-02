import './App.css';
import Navbar from './Navbar';
import AddNotice from './pages/AddNotice';
import Home from './pages/Home';
import SavedNotice from './pages/SavedNotice';
import YourNotice from './pages/YourNotice';
import Error from './pages/Error';
import {Route, Routes} from 'react-router-dom';
import Footer from './Footer';


function App() {
  return (
    <>
      <Navbar />      
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add" exact element={<AddNotice />} />
          <Route path="/saved" exact element={<SavedNotice />} />
          <Route path="/your" exact element={<YourNotice />} />
          <Route path="*" exact element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
    
  );
}

export default App;
