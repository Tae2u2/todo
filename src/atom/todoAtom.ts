import { atom } from "recoil";
import { TodoListState , IsOpenedState } from "../types/TodoTypes";
  
  export const todoListState = atom<TodoListState>({
    key: 'todoListState',
    default: {
      loading: false,
      data: null,
      error: null,
    },
  });

  export const isOpenedState = atom<IsOpenedState>({
    key: 'isOpenedState',
    default: {
      isOpened: false,
    },
  });