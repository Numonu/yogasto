import { createContext } from "react";
import { DEFCORE } from "./constants/DefaultCore";
import { TItem } from "../global/styles/types/TItem";

type TCoreItem = {
	order: number;
	title: string;
	price: string;
	type : TItem;
};
type TCore = {
	focus: number;
	storage: {
		order: number;
		title: string;
		items: TCoreItem[];
	}[];
};
type TCoreContext = {
	handleAddGroup: (title: string) => void;
	handleAddItem: (title: string, price: string , type : TItem) => void;
	handleRemoveItem : (order : number) => void;
	core: TCore
};

export const CoreContext = createContext<TCoreContext>(DEFCORE);
