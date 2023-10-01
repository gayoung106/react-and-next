import "./TodoItem.css";

const TodoItem = ({ id, isDone, createdDate, content, onUpdate }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        className="checkbox_col"
        type="checkbox"
        checked={isDone}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
