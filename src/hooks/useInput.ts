import React, { useState } from 'react'


type MyFormProps = {
	onSubmit: (form: { initialValue1: string; initialValue2: string }) => void;
	isNewAccount? : boolean;
  };

const useInput = ({onSubmit} :MyFormProps) => {
	const [showToast , setShowToast] = useState(false);
    const [form, setForm] = useState({
		initialValue1: '',
		initialValue2: ''
    });
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value
      });
    };

    const { initialValue1, initialValue2 } = form;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(form.initialValue1 === "" || form.initialValue2 === ""){
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);  
        }, 2000);
      }else{
        onSubmit(form);
        setForm({
	      initialValue1: '',
          initialValue2: ''
        });
      }
    };

	return [form, showToast, onChange, handleSubmit];
}

export default useInput;