import { TItem } from "../../global/types/TItem";

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
				title: "grupo de ejemplo",
				items: [
					{
						title: "gasto de ejemplo",
						price: "5.00",
						type: "expense" as TItem,
					},
					{
						title: "ganancia de ejemplo",
						price: "15.00",
						type: "profit" as TItem,
					},
				],
			},
		],
	},
};
