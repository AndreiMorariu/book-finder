import styles from './Main.module.css';
import Button from '../Button/Button';
import Form from '../Form/Form';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

function Main() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={styles.main}>
      {isOpen && <Form />}
      <div className={styles.textContainer}>
        <h2>Find information about any book</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          consequuntur, minus, aliquid, tempora veniam itaque impedit molestiae
          sunt iusto beatae sed laborum? Blanditiis dolorem magnam at. Tenetur
          esse voluptas provident.
        </p>
        <Button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'var(--primary)',
            border: '1px solid #000',
            padding: '1rem 1rem',
          }}
          onClick={setIsOpen}
        >
          <AiOutlineSearch size='1rem' />
          Find Book
        </Button>
      </div>
      <div className={styles.imgContainer}>
        <img src='../../../public/undraw_Books_re_8gea.png' alt='' />
      </div>
    </main>
  );
}

export default Main;
