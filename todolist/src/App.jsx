import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

const mockDate = [
  {
    id: 0,
    isDone: true,
    content: "공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: "다영이 괴롭히기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "다영이 놀리기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockDate);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList />
    </div>
  );
}

export default App;
