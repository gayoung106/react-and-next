import { useRef, useState } from "react";
import "./TodoEditor.css";

// 5. props로 받아오기
const TodoEditor = ({ onCreate }) => {
  // 6. 입력하는 content의 상태관리를 위한 useState
  const [content, setContent] = useState("");

  //아무것도 입력하지 않으면, 추가 버튼 작동 금지
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onClick = () => {
    //value(content)에 아무것도 입력하지 않으면, 현재 포커스를 current창에 둠
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClick();
    }
  };
  return (
    <div className="TodoEditor">
      {/* 7. value값 : input창에 입력하는 값 */}
      {/* 8. onChange를 이용해서 입력 value값을 새로운 setContent 값으로 전달 */}
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="추가할 할 일"
      />
      {/* 9. 추가 버튼을 누르면 새로 입력받아서 onChange로 넘긴 value값을 onCreate로 넘김 */}
      <button onClick={onClick}>추가</button>
    </div>
  );
};

export default TodoEditor;
