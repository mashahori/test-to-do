import { useState } from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';
import './index.css';

const StyledButton = withStyles({
  root: {
    marginLeft: '20px',
  }
})(Button);

const Adder = ({ addItem, error, helperText }) => {
  const [value, setValue] = useState('');

  return (
    <div className="container">
      <TextField
       placeholder="Write here"
       onChange={(e)=> setValue(e.target.value)}
       error={error}
       fullWidth
       helperText={<span>{helperText}</span>}
      />
      <StyledButton onClick={() => value && addItem({ name: value, checked: false})}>
        Add
      </StyledButton>
    </div>
  );
};

export default Adder;