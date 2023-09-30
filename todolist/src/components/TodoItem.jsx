import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <input className="checkbox_col" type="checkbox" />
      <div className="content">내용</div>
      <div className="date">작성일</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
