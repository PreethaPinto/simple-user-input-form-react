import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUsers.module.css';

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredAge, enteredUsername);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          value={enteredUsername}
          type='text'
          id='username'
          onChange={usernameChangeHandler}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          value={enteredAge}
          type='number'
          id='age'
          onChange={ageChangeHandler}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
