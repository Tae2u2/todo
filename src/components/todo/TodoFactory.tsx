import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import Toast from "../../utils/Toast";

type MyFormProps = {
  onSubmit: (form: { title: string; content: string }) => void;
};

const TodoFactory = ({onSubmit} :MyFormProps) => {
  const [showToast , setShowToast] = useState(false);
  const title = useInput("");
  const content = useInput("");

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(typeof title.value === "string" && typeof content.value=== "string"){
        onSubmit({title: title.value , content:content.value});
      }else{
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);  
        }, 2000);
      }
  };


  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        {...title}
        name="title"
        type="text"
        placeholder="할 일"
        required
      />
      <input
        {...content}
        name="content"
        type="text"
        placeholder="상세메모"
        required
      />
      <input type="submit" id="input-btn" value="입력" />
    </form>
      {showToast && <Toast showToast={false} title="할 일과 내용을 입력해주세요" />}
    </>
  );
};

export default TodoFactory;
