import { useState, useRef, useCallback } from "react";
import "./style.css";

const Gaha = () => {
  const [animation, setAnimation] = useState(false);

  const onClick = () =>{
    setAnimation(animation => animation=true)
    setTimeout(function(){
      setAnimation(animation => animation=false)
    },500)

  }
  return (
    <>
      <div className="viewWrap gaha">
        <h1></h1>
        <div
        className="list">
            <form>
              <input
              type="text"
              placeholder="todo 입력하기"/>
              <button>확인</button>
            </form>
          <ul
          className={`item_wrap ${animation? "active": ""}`}
          >
            <li>
              <input
              type="checkbox"
              />
              <input
              type="text"
              placeholder="집에가기"
              disabled={true}
              />
              <button>수정</button>
              <button
              onClick={onClick}
              >삭제</button>
            </li>
            <li 
            className="done">
              <input
              type="checkbox"
              checked={true}
              />
              <input
              type="text"
              placeholder="집에가기"
              disabled={true}
              />
              <button>삭제</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Gaha;
