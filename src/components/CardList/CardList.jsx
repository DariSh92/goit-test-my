import { Card } from 'components/Card/Card';
import { ListEl } from 'components/CardList/CardList.styled';
import users from '../data/users.json';

export const CardList = () => {
  return (
    <ListEl>
      {users.map(user => (
        <Card aboutUser={user} key={user.id} />
      ))}
    </ListEl>
  );
};
