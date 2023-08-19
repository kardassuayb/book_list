import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div>
      <p>Add a Book</p>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" onChange={handleChange} value={title} />
        <button type="submit">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
