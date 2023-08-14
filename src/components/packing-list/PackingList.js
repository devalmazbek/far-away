import Item from "../item/Item";
import { initialItems as data } from "../data";

function Packinglist() {
  return (
    <div className="list">
      <ul>
        {data.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default Packinglist;
