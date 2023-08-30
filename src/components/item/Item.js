function Item({ item, onRemoveItem, onItemSelect }) {
  const done = item.packet ? { textDecoration: "line-through" } : {};

  return (
    <li style={done} id={item.id}>
      <input
        type="checkbox"
        value={item.packet}
        onChange={() => onItemSelect(item.id)}
      />
      <span>{item.quantity}</span>
      <span>{item.description}</span>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
