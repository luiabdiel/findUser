import { MdLocationPin } from 'react-icons/md';
import { IUser } from '../../types/User';
import styles from './styles.module.scss';

export function Profile({
  login,
  avatar_url,
  location,
  followers,
  following
}:IUser) {
  return (
    <div className={styles.container}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={styles.location}>
          <MdLocationPin/>
          <span>{location}</span>
        </p>
      )}
      <div className={styles.stats}>
        <div>
          <p>Seguidores</p>
          <p className={styles.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo</p>
          <p className={styles.number}>{following}</p>
        </div>
      </div>
    </div>
  );
}
