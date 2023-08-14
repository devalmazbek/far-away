function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="ente something...." />
      <button>Add</button>
    </form>
  );
}

export default Form;
