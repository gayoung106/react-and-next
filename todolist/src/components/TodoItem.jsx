import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, createdDate, content, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };
  const contentStyle = {
    textDecoration: isDone ? "line-through " : "none", // isDone 상태에 따라 밑줄 스타일을 설정
    color: isDone ? "gray" : "black",
  };
  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        className="checkbox_col"
        type="checkbox"
        checked={isDone}
      />
      <div className="content" style={contentStyle}>
        {content}
      </div>
      <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);
