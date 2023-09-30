import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onClick = () => {
    onCreate(content);
  };
  return (
    <div className="TodoEditor">
      <input
        value={content}
        onChange={onChangeContent}
        placeholder="추가할 할 일"
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
};

export default TodoEditor;
