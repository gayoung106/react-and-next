import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

const mockDate = [
  {
    id: 0,
    isDone: false,
    content: "공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "다영이 괴롭히기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "다영이 놀리기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  // 1. todolist를 위한 상태관리 useState hook
  const [todos, setTodos] = useState(mockDate);
  // 3. id 값을 고유값으로 증가하게 하기 위함
  const idRef = useRef(3);
  // 2. 생성되는 데이터 값, mock데이터의 프로퍼티와 동일
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };

    // 2-1. setTodos로 todolist의 현재 상태로 만들기
    // newTodo(새로추가) + 기존에 있던 todos로 배열로 보관
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };
  return (
    <div className="App">
      <Header />
      {/* 4. props로 넘겨주기 */}
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
