import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addUser } from 'redux/Users/usersSlice';

export const AddUserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addUser({
        name: e.target.elements.name.value,
        id: Date.now(),
        age: e.target.elements.age.value,
      })
    );
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name"></input>
      </label>
      <label>
        Age
        <input type="number" name="age"></input>
      </label>
      <button>Add user</button>
    </form>
  );
};
