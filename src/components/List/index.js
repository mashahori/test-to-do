import { List as MuiLIst, ListItem, IconButton, ListItemText, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const List = ({ items, deleteItem }) => (
  <MuiLIst>
    {items && items.map((item) => (
      <ListItem key={item}>
        <Checkbox />
        <ListItemText
            primary={item}
          />
        <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(item)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    ))}
  </MuiLIst>
);

export default List;