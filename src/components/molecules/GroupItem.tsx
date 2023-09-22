import { useContext } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { CoreContext } from "../../context/CoreContex";

type CostGroupTypes = {
	title: string;
	order: number;
};
export default function CostGroup({ title, order }: CostGroupTypes) {
	const { handleRemoveGroup, handleChangeFocus } = useContext(CoreContext);
	return (
		<li>
			<button
				className="bg-zinc-700 outline-zinc-700 w-full p-4 pr-2 rounded-md outline-2 group hover:bg-zinc-800 hover:outline"
				onClick={() => handleChangeFocus(order)}
			>
				<header className="flex items-center justify-between">
					<h3 className="text-neutral-400 group-hover:text-neutral-200">
						{title}
					</h3>
					<button
						className="text-neutral-400 p-2 hover:text-red-500"
						onClick={(e) => {
							e.stopPropagation();
							handleRemoveGroup(order);
						}}
					>
						<BsTrash3Fill />
					</button>
				</header>
			</button>
		</li>
	);
}
