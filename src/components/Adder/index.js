import { useState } from 'react';
import { Input, Button, withStyles } from '@material-ui/core';
import './index.css';

const StyledButton = withStyles({
  root: {
    marginLeft: '20px',
  }
})(Button);

const Adder = ({ addItem, error }) => {
  const [value, setValue] = useState('');

  return (
    <div className="container">
      <Input
       placeholder="Write here"
       onChange={(e)=> setValue(e.target.value)}
       error={error}
       fullWidth
      />
      <StyledButton onClick={() => value && addItem(value)}>
        Add
      </StyledButton>
    </div>
  );
};

export default Adder;