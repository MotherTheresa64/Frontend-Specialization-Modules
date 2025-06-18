import useBookAvailability from '../hooks/useBookAvailability';
import { Spinner, Alert, Badge } from 'react-bootstrap';

const Book = ({ bookId, title }) => {
  const { availability, isLoading, error } = useBookAvailability(bookId);

  if (isLoading) return <Spinner variant="primary" animation="border" role="status" />;
  if (error) return <Alert variant="danger">Error fetching book availability</Alert>;

  return (
    <div>
      <h3>{title}</h3>
      {availability ? (
        <Badge bg="success">Available</Badge>
      ) : (
        <Badge bg="secondary">Unavailable</Badge>
      )}
    </div>
  );
};

export default Book;
