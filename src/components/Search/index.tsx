import { useState, KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './styles.module.scss';

interface ISearchProps {
  handlefetchUser: (Username: string) => Promise<void>;
}

export function Search({ handlefetchUser }: ISearchProps) {
  const [userName, setUserName] = useState('');

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      handlefetchUser(userName);
    }
  }

  return (
    <div className={styles.search}>
      <h3>Busque por usuário:</h3>
      <span>Conheça seus melhores repositórios</span>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => handlefetchUser(userName)}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
