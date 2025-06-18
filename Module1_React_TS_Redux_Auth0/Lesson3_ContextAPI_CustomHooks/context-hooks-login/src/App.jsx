import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Book from './components/Book';
import UserContext from './context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const books = [
  { id: 1, title: 'React Fundamentals' },
  { id: 2, title: 'Advanced React' },
  { id: 3, title: 'React Hooks in Depth' },
];

function BookAvailabilityPage() {
  return (
    <Container className="mt-5">
      <h1>Library Book Availability</h1>
      <Row>
        {books.map((book) => (
          <Col key={book.id} md={4} className="mb-3">
            <Book bookId={book.id} title={book.title} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function App() {
  const [user, setUser] = useState({ name: '', isLoggedIn: false });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/books" element={<BookAvailabilityPage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
