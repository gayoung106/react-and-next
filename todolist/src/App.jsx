import { useReducer, useRef, useCallback, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { TodoStateContext, TodoDispatchContext } from "./TodoContext";

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
function reducer(state, action) {
  if (action.type === "CREATE") {
    return [...state, action.data];
  }
  if (action.type === "UPDATE") {
    return state.map((it) =>
      it.id === action.data ? { ...it, isDone: !it.isDone } : it
    );
  }
  if (action.type === "DELETE") {
    return state.filter((it) => it.id !== action.data);
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockDate);

  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
    // setTodos([newTodo, ...todos]);
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
  }, []);
  // setTodos(
  //   todos.map((todo) => {
  //     if (todo.id === targetId) {
  //       return {
  //         ...todo,
  //         isDone: !todo.isDone,
  //       };
  //     } else {
  //       return todo;
  //     }
  //   })
  // );

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      data: targetId,
    });

    // setTodos(todos.filter((todo) => todo.id !== targetId));
  }, []);

  const memoizedDispatches = useMemo(() => {
    return {
      onCreate,
      onDelete,
      onUpdate,
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
