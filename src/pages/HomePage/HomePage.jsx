import { useSelector, useDispatch } from 'react-redux';

import { selectUsers } from 'redux/Users/selectors';
import { deleteUser } from 'redux/Users/usersSlice';

export const HomePage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button
              onClick={() => {
                dispatch(deleteUser(user.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
