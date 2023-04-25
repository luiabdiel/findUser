import { useState } from 'react';
import { Profile, Search } from './components';
import { IUser } from './types/User';
import { api } from './utils/api';
import styles from './app.module.scss';

export function App() {
  const [users, setUsers] = useState<IUser | null>(null);

  async function handlefetchUser(Username: string) {
    try {
      const { data } = await api.get(`${Username}`);

      const {
        login,
        avatar_url,
        location,
        followers,
        following
      } = data;

      const userData: IUser = {
        login,
        avatar_url,
        location,
        followers,
        following,
      };

      setUsers(userData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.app}>
      <h1>GitHub Finder</h1>
      <Search
        handlefetchUser={handlefetchUser}
      />
      {users && <Profile {...users}/>}
    </div>
  );
}
