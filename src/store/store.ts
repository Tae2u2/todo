import create from "zustand";

export interface userTokenState {
    userToken : string | null
}

export const useUserTokenStore = create<userTokenState>()((set)=>({
    userToken : null,
}));
