import React, { useState } from "react";

const TodoCompPrac = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodos] = useState("");
  console.log(todos);

  const handleClick = (e) => {
    // e.preventdefault();
    setTodos([...todos, newTodo]);
    setNewTodos("");
  };
  return (
    <div>
      TodoCompPrac:
      <input
        type="text"
        placeholder="add to list"
        value={newTodo}
        onChange={(e) => setNewTodos(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {todos.map((data, ind) => {
          return (
            <div>
              {data}
              <button onClick={() => setTodos(todos.filter((t) => t !== data))}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoCompPrac;
