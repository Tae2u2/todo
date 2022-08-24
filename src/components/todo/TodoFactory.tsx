import React, { useState } from "react";
import TodoApi from "../../api/TodoApi";
import Toast from "../../utils/Toast";


type MyFormProps = {
  onSubmit: (form: { title: string; content: string }) => void;
};

const TodoFactory = ({onSubmit} :MyFormProps) => {
  const [showToast , setShowToast] = useState(false);
  const [form, setForm] = useState({
    title: '',
    content: ''
  });
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const { title, content} = form;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(form.title === "" || form.content === ""){
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);  
      }, 2000);
    }else{
      onSubmit(form);
      setForm({
        title: '',
        content: ''
      });
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        onChange={onChange}
        value={title}
        placeholder="할 일"
        required
      />
      <input
        name="content"
        type="text"
        onChange={onChange}
        value={content}
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
