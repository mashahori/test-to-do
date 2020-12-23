import { List as MuiLIst } from '@material-ui/core';
import Item from '../../components/Item';

const List = ({ items, deleteItem, checkItem }) => (
  <MuiLIst>
    <span>Count: {items.length}</span>
    {items && items.map((item) => (
      <Item
        key={item.name}
        el={item}
        checkItem={(el) => checkItem(el)}
        deleteItem={(el) => deleteItem(el)}
      />
    ))}
  </MuiLIst>
);

export default List;