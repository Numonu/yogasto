import { useCallback, useState } from "react";
import { CoreContext } from "../CoreContex";
import { ReactNode } from "react";
import { DEFCORE } from "../constants/DefaultCore";
import { produce } from "immer";

export default function CoreProvider({ children }: { children: ReactNode }) {
	const [core, setCore] = useState(DEFCORE.core);

	const handleAddGroup = useCallback((title : string) => {
		setCore(
			produce((draft) => {
				draft.storage.push({
					order: draft.storage.length,
					title,
					items: [],
				});
			})
		);
	}, []);

    const handleAddItem = useCallback((title : string , price : string) => {
		setCore(
			produce((draft) => {
                const itemAtlas = draft.storage[draft.focus].items;
				itemAtlas.push({
                    order : itemAtlas.length,
                    title,
                    price,
                })
			})
		);
	}, []);

	return (
		<CoreContext.Provider
			value={{
				core,
				handleAddGroup,
				handleAddItem,
			}}
		>
			{children}
		</CoreContext.Provider>
	);
}
