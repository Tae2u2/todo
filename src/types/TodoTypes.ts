export interface TodoState {
    title: string;
    content: string;
}

export interface TodoIdState {
    id: string;
}

export interface ModifiedTodoState {
    modifiedContent: string;
    modifiedTitle: string;    
}

export interface TodosState {
    title : string;
    content :  string;
    id : string;
    createdAt : string;
    updatedAt : string;
}

export interface TodoListState {
    loading: boolean;
    data: TodosState[] | null;
    error: Error | null;
}

export interface IsOpenedState {
    isOpened: boolean;
}