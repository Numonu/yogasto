import { createContext } from "react";
import { DEFCORE } from "./constants/DefaultCore";

type TCoreItem = {
	order: number;
	title: string;
	price: string;
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
	handleAddGroup: (i: string) => void;
	handleAddItem: (i: string, p: string) => void;
	core: TCore
};

export const CoreContext = createContext<TCoreContext>(DEFCORE);
