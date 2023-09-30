import { useLocation } from 'react-router-dom';
import BookInformation from '../components/BookInformation/BookInformation';

function Details() {
  const location = useLocation();
  const data = location.state.data.items || [];
  console.log(data);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        justifyItems: 'center',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      {data.map((book) => (
        <BookInformation book={book} key={book.id} />
      ))}
    </div>
  );
}

export default Details;
