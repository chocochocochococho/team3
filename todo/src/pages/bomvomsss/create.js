import { useState, useRef, useCallback } from "react"; // eslint-disable-line no-unused-vars
import "../../index.css";

const TodoCreate = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  },[])
  const onSubmit = useCallback(
    e => {
      setValue(''); //value 초기화
      e.preventDefault();//기본이벤트(새로고침)방지
    },[value])
  return(
    <form className="todoInsert" onSubmit={onSubmit}>
      <input
      onChange={onChange}
      value={value} placeholder="할 일을 입력하세요" />
      <button type="submit">
        add
      </button>
    </form>
  )
}

export default TodoCreate;