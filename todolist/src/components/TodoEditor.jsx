import "./TodoEditor.css";

const TodoEditor = () => {
  return (
    <div className="TodoEditor">
      <input placeholder="추가할 할 일" />
      <button>추가</button>
    </div>
  );
};

export default TodoEditor;
