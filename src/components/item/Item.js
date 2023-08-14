function Item({ item }) {
  const done = item.packet ? { textDecoration: "line-through" } : {};

  return (
    <li style={done}>
      <span>{item.quantity}</span>
      <span>{item.description}</span>
      <button>❌</button>
    </li>
  );
}

export default Item;
