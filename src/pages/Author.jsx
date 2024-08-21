import { useParams } from 'react-router-dom';

export default function Author() {
  const { id } = useParams();

  return (
    <div>
      <h1>Author Details</h1>
      <p>Details for author with ID: {id}</p>
    </div>
  );
}
