import { useLocation } from 'react-router-dom';
import styles from './BookDetail.module.css';

function BookDetail() {
  const location = useLocation();
  const book = location.state.book || [];

  return (
    <div className={styles.container}>
      <div className={styles.book}>
        <header>
          <img
            className={styles.bookImage}
            src={book.volumeInfo.imageLinks.smallThumbnail}
            alt={book.volumeInfo.title}
          />
          <div>
            <p>Title: {book.volumeInfo.title}</p>
            <p>Author: {book.volumeInfo.authors}</p>
            <p>Nr. of pages: {book.volumeInfo.pageCount} </p>
            <p>Categories: {book.volumeInfo.categories} </p>
            <a href={book.saleInfo?.buyLink} target='_blank'>
              Click here to buy {book.volumeInfo.title}
            </a>
          </div>
        </header>
        <div className={styles.bookInformation}>
          {book.volumeInfo.description}
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
