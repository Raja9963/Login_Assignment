import './App.css';
import Login from './components/Login';
import Success from './components/Success';
import logo from './images/logo.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/success' element={<Success/>}/>

        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
    </div>
  );
}

export default App;
