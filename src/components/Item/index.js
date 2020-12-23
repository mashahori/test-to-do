import { useState } from 'react';
import { List as MuiLIst, ListItem, IconButton, ListItemText, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = (props) => {
  const { el, el: { name, checked }, checkItem, deleteItem } = props;
  const [checkedItem, setValue] = useState(checked);

  const handleChecked = (e) => {
    setValue(e.target.checked);
    checkItem(e)
  }
  return (
    <ListItem>
        <Checkbox checked={checkedItem} id={name} onChange={(e) => handleChecked(e) } />
        <ListItemText
            primary={name}
          />
        <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(el)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
  );
};

export default Item;