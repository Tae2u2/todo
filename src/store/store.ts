import create from "zustand";

export interface userTokenState {
    userToken : string | null
}

export const useUserTokenStore = create<userTokenState>()((set)=>({
    userToken : null,
}));

export interface OpenEditState {
    openEdit : boolean;
    setOpenEdit : () => void;
}

export const useOpenEditStore = create<OpenEditState>()((set)=>({
    openEdit : false,
    setOpenEdit: () => set((state) => ({openEdit : !state})),
}));

export interface isNewAccountState {
    isNewAccount : boolean;
    setisNewAccount : () => void;
}

export const useIsNewAccountStore = create<isNewAccountState>()((set)=>({
    isNewAccount : false,
    setisNewAccount: () => set((state) => ({isNewAccount : !state})),
}));