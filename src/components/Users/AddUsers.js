import classes from './AddUsers.module.css';
import Card from '../UI/Card';

const AddUsers = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' />
        <label htmlFor='age'>Age (Years)</label>
        <input type='number' id='age' />
        <button type='submit'>Add New User</button>
      </form>
    </Card>
  );
};

export default AddUsers;
