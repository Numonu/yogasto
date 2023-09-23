import { useCallback, useEffect, useState } from "react";
import { CoreContext } from "../CoreContex";
import { ReactNode } from "react";
import { DEFCORE } from "../constants/DefaultCore";
import { produce } from "immer";
import { TItem } from "../../global/types/TItem";

export default function CoreProvider({ children }: { children: ReactNode }) {
	const [core, setCore] = useState(DEFCORE.core);
	const [loaded , setLoaded] = useState(false);

	const handleAddGroup = useCallback((title: string) => {
		setCore(
			produce((draft) => {
				draft.storage.push({
					title,
					items: [],
				});
			})
		);
	}, []);

	const handleAddItem = useCallback(
		(title: string, price: string, type: TItem) => {
			setCore(
				produce((draft) => {
					const itemAtlas = draft.storage[draft.focus].items;
					itemAtlas.push({
						title,
						price,
						type,
					});
				})
			);
		},
		[]
	);

	const handleRemoveItem = useCallback((order: number) => {
		setCore(
			produce((draft) => {
				const group = draft.storage[draft.focus];
				group.items.splice(order, 1);
			})
		);
	}, []);

	const handleRemoveGroup = useCallback((order: number) => {
		setCore(
			produce((draft) => {
				draft.storage.splice(order, 1);
			})
		);
	}, []);

	const handleChangeFocus = useCallback((focus: number) => {
		setCore(
			produce((draft) => {
				draft.focus = focus;
			})
		);
	}, []);

	useEffect(() => {
		const storagePick = localStorage["save"];
		if(!storagePick)return;

		const json = JSON.parse(storagePick);
		setCore({
			...core,
			storage: json,
		});
		
		setLoaded(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if(!loaded)return;
		const json = JSON.stringify(core.storage);
		localStorage["save"] = json;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [core.storage]);

	return (
		<CoreContext.Provider
			value={{
				core,
				handleAddGroup,
				handleAddItem,
				handleRemoveItem,
				handleRemoveGroup,
				handleChangeFocus,
			}}
		>
			{children}
		</CoreContext.Provider>
	);
}
