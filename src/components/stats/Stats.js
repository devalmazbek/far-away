function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        There is nothing to pack. Please add some items to your packing list....
        🚀
      </p>
    );
  }

  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packet).length;
  const percentageDone = Math.round((totalPacked / totalItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentageDone === 100
          ? "You  got everything! Ready to go ✈"
          : `You have ${totalItems} items on your list, and you already packed ${totalPacked} (${percentageDone}%)`}
      </em>
    </footer>
  );
}

export default Stats;
