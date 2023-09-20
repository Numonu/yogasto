import { createContext } from "react";
import { DEFCORE } from "./constants/DefaultCore";

type TCoreContextItem = {
	order: number;
	title: string;
	price: string;
};
type TCoreContext = {
	focus: number;
	storage: {
		order: number;
		title: string;
		items: TCoreContextItem[];
	}[];
};

export const CoreContext = createContext<TCoreContext>(DEFCORE);
