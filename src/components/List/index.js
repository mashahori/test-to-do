import { List as MLIst, ListItem, IconButton, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const List = ({ items, deleteItem }) => (
  <MLIst>
    {items.map((item) => (
      <ListItem key={item}>
        <ListItemText
            primary={item}
          />
        <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(item)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    ))}
  </MLIst>
);

export default List;