
import { useState } from 'react';
import { Adder, List } from './components';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const addItem = (el) => {
    if (items.indexOf(el) === -1) {
      setError(false);
      setItems([...items, el]);
    } else {
      setError(true);
    }
  };
  
  const deleteItem = (el) => {
    const index = items.indexOf(el);
    const newArray = [...items.slice(0, index), ...items.slice(index + 1, items.length)];
    setItems(newArray);
  };

  return (
    <div className="App">
      <Adder addItem={(el) => addItem(el)} error={error} />
      <List items={items} deleteItem={(el) => deleteItem(el) } />
    </div>
  )
};

export default App;
