import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Authors from './pages/Authors';
import Book from './pages/Book';
import Author from './pages/Author';

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/authors">Authors</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/authors/:id" element={<Author />} />
      </Routes>
    </Router>
  );
}
