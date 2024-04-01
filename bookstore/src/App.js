import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Home';
import 'react-multi-carousel/lib/styles.css';
import Books from './Books'
import {Routes, Route} from 'react-router-dom';
import './index.js'

function App() {

  return (
      <><>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' exact component={<Books />} />
      </Routes>
    </>
    <div className="App">
        <Navbar />
        <div className='content'>
          <Home />
          <div className='Books'><Books/></div>
        </div>
      </div></>
  );
}

export default App;
