import { useState } from "react";
import Logo from "./components/logo/Logo";
import Form from "./components/form/Form";
import Packinglist from "./components/packing-list/PackingList";
import Stats from "./components/stats/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(id) {
    setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  }

  function handleSelectItem(id) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });

    setItems(newItems);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <Packinglist
        items={items}
        onRemoveItem={handleRemoveItem}
        onItemSelect={handleSelectItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
