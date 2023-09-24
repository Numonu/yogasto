import {create} from "zustand";
import MAX_PRICE from "../global/constants/maxPrice";

type UseTotalTypes = {
    total : number,
    updateTotal : (a : number) => void;
}

const useTotal = create<UseTotalTypes>((set) => ({
    total : 0,
    updateTotal(newValue : number){
        set(() => ({total : Math.min(newValue , MAX_PRICE)}))
    }
}));
export default useTotal;