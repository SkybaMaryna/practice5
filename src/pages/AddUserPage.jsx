import { useDispatch } from 'react-redux';
import { addUserAC } from 'redux/Users/actions';

export const AddUserPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addUserAC({
        name: e.target.elements.name.value,
        id: Date.now,
        age: e.target.elements.age.value,
      })
    );
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
