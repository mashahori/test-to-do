
import { useState } from 'react';
import { Adder, List, Tabs } from './components';
import './App.css';

const App = () => {
  const [showedItems, setShowedItems] = useState([]); // for showed items
  const [allItems, setItems] = useState([]); // for all items
  const [error, setError] = useState('');

  const addItem = (el) => {
    if (allItems.find(e => e.name === el.name)) {
      setError('already exist');
    } else if (el.name.length > 10) {
      setError('no more then 10')
    } else {
      setItems([...allItems, el]);
      setShowedItems([...allItems, el]);
    }
  };
  
  const deleteItem = (el) => {
    const index = allItems.indexOf(el);
    const newArray = [...allItems.slice(0, index), ...allItems.slice(index + 1, allItems.length)];
    setItems(newArray);
    setShowedItems(newArray);
  };

  const updateList = (tab) => {
    if (allItems.length !== 0) {
      const doneArray = allItems.filter((el) => el.checked === true);
      const undoneArray = allItems.filter((el) => el.checked === false);

      if (tab === 1) {
        setShowedItems(doneArray);
      } else if (tab === 2) {
        setShowedItems(undoneArray);
      } else {
        setShowedItems(doneArray.concat(undoneArray));
      }
      console.log(tab);
    }
  };

  const handleChecked = (ev) => {
    const newArray = allItems;
    const name = ev.target.id;
    const checked = ev.target.checked;
    const index = allItems.findIndex((el) => el.name === name);
    newArray[index].checked = checked;
    setItems(newArray);
    setShowedItems(newArray);
  }

  return (
    <div className="App">
      <Adder
        addItem={(el) => addItem(el)}
        error={error ? true : false}
        helperText={error} />
      <Tabs 
        changeList={(value) => updateList(value)} />
      <List 
        items={showedItems}
        deleteItem={(el) => deleteItem(el)}
        checkItem={(el) => handleChecked(el)}
      />
    </div>
  )
};

export default App;
