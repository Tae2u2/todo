import axiosApi from "./AxiosApi";
import { TodoState } from "../types/TodoTypes";
import { TodoIdState } from "../types/TodoTypes";
import { ModifiedTodoState } from "../types/TodoTypes";

  const TodoApi = {
    get: async () => {
      const { data } = await axiosApi.get("/todos");
      return data.data;
    },

    getById: async ({id}:TodoIdState) =>{
      const { data } = await axiosApi.get(`/todos/${id}`);
      return data.data;
    },

    add: async ({ title, content }: TodoState) => {
      const { status } = await axiosApi.post("/todos", { 
        title,
        content,
    });
      return status;
    },

    update: async ({ modifiedTitle, modifiedContent }: ModifiedTodoState, {id}: TodoIdState) => {
      const { status } = await axiosApi.put(`/todos/${id}`, { 
        modifiedTitle,
        modifiedContent,
     });
     return status;
    },

    delete: async ({id}: TodoIdState) => {
        const { status } = await axiosApi.delete(`/todos/${id}`);
        return status;
    },
  };
  
  export default TodoApi;
