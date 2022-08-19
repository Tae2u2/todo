import React, { useState, useCallback, useEffect } from 'react'
import styles from "../style/Toast.module.css";

export interface ToastState {
    id: number;
    title: string;
    description: string;
    backgroundColor: string; 
};


const Toast = ({statusNumber , title} : { statusNumber : number, title:string }) => {
  const [toastList , setToastList] = useState<ToastState[]>([]);
  let toastProperties  = null;
  const position = "bottom-right";

  const deleteToast = useCallback((id : number) => {
    const toastListItem = toastList.filter(e => e.id !== id);
    setToastList(toastListItem);
  }, [toastList, setToastList]);

  const showToast = (statusNumber: number , title : string) => {
    if(statusNumber === 200) {
        toastProperties = {
          id: toastList.length+1,
          title: `${title} 성공`,
          description: 'Thank you! enjoy your todo!',
          backgroundColor: '#5cb85c'
        }
      }else {
        toastProperties = {
          id: toastList.length+1,
          title: `${title} 실패`,
          description: 'Sorry. Please try again.',
          backgroundColor: '#d9534f'
        }
      }
        setToastList([...toastList, toastProperties]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if(toastList.length) {
        deleteToast(toastList[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [toastList, deleteToast]);

  useEffect(()=>{
    showToast(statusNumber , title);
  },[])

  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {
        toastList.map((toast, i) => (
          <div
            key={i}
            className={`${styles.notification} ${styles.toast} ${styles[position]}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={() => deleteToast(toast.id)}>X</button>
            <div>
              <p className={styles.title}>{toast.title}</p>
              <p className={styles.description}>{toast.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default Toast