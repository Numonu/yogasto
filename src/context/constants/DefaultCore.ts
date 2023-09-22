import { TItem } from "../../global/styles/types/TItem";

export const DEFCORE = {
	handleAddGroup: function () {},
	handleAddItem: function () {},
	handleRemoveItem: function () {},
	handleRemoveGroup: function () {},
	handleChangeFocus: function () {},
	core: {
		focus: 0,
		storage: [
			{
				title: "example folder",
				items: [
					{
						title: "example cost",
						price: "10.00",
						type: "expense" as TItem,
					},
				],
			},
		],
	},
};
