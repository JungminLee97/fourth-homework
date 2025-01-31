import { useState } from "react";
const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Deploy to Production", completed: false },
  ]);

  const todosValue = (e) => {
    setInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    const newEntry = {
      id: crypto.randomUUID(),
      text: input,
    };
    setTodos([...todos, newEntry]);
    setInput("");
  };

  const handleDeleted = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleUpdated = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input value={input} onChange={todosValue}></input>
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
              <button
                onClick={() => {
                  handleUpdated(todo.id);
                }}
              >
                {todo.completed ? "업뎃완료" : "업뎃필요"}
              </button>
              <button
                onClick={() => {
                  handleDeleted(todo.id);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
