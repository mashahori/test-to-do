
import { useState } from 'react';
import { Adder, List, Tabs } from './components';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const addItem = (el) => {
    if (items.indexOf(el) !== -1) {
      setError('already exist');
    } else if (el.length > 10) {
      setError('no more then 10')
    } else {
      setItems([...items, el]);
    }
  };
  
  const deleteItem = (el) => {
    const index = items.indexOf(el);
    const newArray = [...items.slice(0, index), ...items.slice(index + 1, items.length)];
    setItems(newArray);
  };

  return (
    <div className="App">
      <Adder addItem={(el) => addItem(el)} error={error ? true : false} helperText={error} />
      <Tabs />
      <List items={items} deleteItem={(el) => deleteItem(el) } />
    </div>
  )
};

export default App;
