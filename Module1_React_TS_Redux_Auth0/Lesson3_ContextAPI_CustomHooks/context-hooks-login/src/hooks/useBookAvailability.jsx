import { useState, useEffect } from 'react';

const useBookAvailability = (bookId) => {
  const [availability, setAvailability] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      try {
        setAvailability(Math.random() > 0.5);
        setIsLoading(false);
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    }, 1000);
  }, [bookId]);

  return { availability, isLoading, error };
};

export default useBookAvailability;
