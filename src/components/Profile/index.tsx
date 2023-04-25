import { MdLocationPin } from 'react-icons/md';
import { IUser } from '../../types/User';

export function Profile({
  login,
  avatar_url,
  location,
  followers,
  following
}:IUser) {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p>
          <MdLocationPin/>
          <span>{location}</span>
        </p>
      )}
      <div>
        <div>
          <p>Seguidores:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
