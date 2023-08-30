import { useState } from "react";
import Item from "../item/Item";

function Packinglist({ items, onRemoveItem, onItemSelect }) {
  const [sortStatus, setSortStatus] = useState();

  let filteredItems = items;
  if (sortStatus === "packed") {
    filteredItems = items.filter((item) => (item.packed ? item : null));
  }
  if (sortStatus === "description") {
    filteredItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  return (
    <div className="list">
      <ul>
        {filteredItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onRemoveItem={onRemoveItem}
            onItemSelect={onItemSelect}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortStatus(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

export default Packinglist;
