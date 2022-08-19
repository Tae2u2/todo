import React from 'react';
import TodoApi from '../api/TodoApi';
import Toast from './Toast';


export const CheckStatusNumber = (responseStatus : number , title : string) =>{
    if(responseStatus === 200){
      TodoApi.get();
      return <Toast title={title} statusNumber={responseStatus}/>
    }else{
      return <Toast title={title} statusNumber={responseStatus}/>
    }
  }