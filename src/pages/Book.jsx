import { useParams } from 'react-router-dom';

export default function Book() {
  const { id } = useParams();

  return (
    <div>
      <h1>Book Details</h1>
      <p>Details for book with ID: {id}</p>
    </div>
  );
}
