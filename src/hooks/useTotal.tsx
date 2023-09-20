import {create} from "zustand";

type UseTotalTypes = {
    total : number,
    updateTotal : (a : number) => void;
}

const useTotal = create<UseTotalTypes>((set) => ({
    total : 0,
    updateTotal(newValue : number){
        set(() => ({total : newValue}))
    }
}));
export default useTotal;