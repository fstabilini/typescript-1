import { useState } from "react";

const ItemList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItem("");
    }
  };
  return (
    <div>
      <h1>Item List</h1>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Enter a new item"
      ></input>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
