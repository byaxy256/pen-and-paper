import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Books from "./pages/Bookspage";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="Books" element={<Books />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

