import { TItem } from "../../global/styles/types/TItem";

export const DEFCORE = {
	handleAddGroup : function(){},
	handleAddItem : function(){},
	handleRemoveItem : function(){},
	core: {
		focus: 0,
		storage: [
			{
				order: 0,
				title: "example folder",
				items: [
					{
						order: 0,
						title: "example cost",
						price: "10.00",
						type : "expense" as TItem
					},
				],
			},
		],
	},
};
