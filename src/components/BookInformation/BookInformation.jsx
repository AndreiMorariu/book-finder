import { useEffect } from 'react';
import styles from './BookInformation.module.css';
import { useNavigate } from 'react-router-dom';

function BookInformation({ book }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.book}
      onClick={() => navigate('/information', { state: { book } })}
    >
      <img
        className={styles.bookImage}
        src={
          book.volumeInfo.imageLinks?.smallThumbnail
            ? book.volumeInfo.imageLinks.smallThumbnail
            : 'https://placehold.co/128x192'
        }
        alt={book.volumeInfo.title}
      />
      <div className={styles.bookInformation}>
        <p className={styles.bookTitle}>{book.volumeInfo.title}</p>
        <p className={styles.bookAuthor}>Author: {book.volumeInfo.authors}</p>
      </div>
    </div>
  );
}

export default BookInformation;
