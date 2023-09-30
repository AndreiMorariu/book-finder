import styles from './Form.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    function getData() {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
    getData();
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/details', { state: { data } });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Search a book</h2>
      <label>Search by title / author of the book</label>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  );
}

export default Form;
