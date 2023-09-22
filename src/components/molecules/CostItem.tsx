import { BsTrash3Fill } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";
import { TItem } from "../../global/styles/types/TItem";
import { useContext } from "react";
import { CoreContext } from "../../context/CoreContex";

type ItemTypes = {
	title: string;
	price: string;
	order : number;
	type: TItem;
};
export default function Item({ title, price, type , order }: ItemTypes) {

	const {handleRemoveItem} = useContext(CoreContext);

	const styles = {
		expense: {
			value: "text-red-500",
			icon: "text-red-500 rotate-90",
		},
		profit: {
			value: "text-emerald-500",
			icon: "text-emerald-500 -rotate-90",
		},
	};

	return (
		<li>
			<div className="bg-zinc-700 text-neutral-300 w-full py-2 px-4 grid grid-cols-3 gap-12 text-sm rounded-md">
				<div className="flex items-center">
					<span className="block whitespace-nowrap overflow-hidden text-ellipsis">
						{title}
					</span>
				</div>
				<div className="flex justify-start items-center gap-2">
					<span className={styles[type].icon}>
						<BiSolidRightArrow />
					</span>
					<span className={styles[type].value}>$ {price}</span>
				</div>
				<div className="flex justify-end" onClick={() => handleRemoveItem(order)}>
					<button className="p-2 hover:text-red-500">
						<BsTrash3Fill />
					</button>
				</div>
			</div>
		</li>
	);
}
