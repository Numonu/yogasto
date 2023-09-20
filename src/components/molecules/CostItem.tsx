import { BsTrash3Fill } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";

type ItemTypes = {
	title: string;
	cost: string;
};
export default function Item({ title, cost }: ItemTypes) {
	return (
		<li>
			<div className="bg-zinc-700 text-neutral-300 w-full py-2 px-4 grid grid-cols-3 gap-12 text-sm rounded-md">
				<div className="flex items-center">
					<span className="block whitespace-nowrap overflow-hidden text-ellipsis">
						{title}
					</span>
				</div>
				<div className="flex justify-start items-center gap-2">
					<span>
						<BiSolidRightArrow />
					</span>
					<span>$ {cost}</span>
				</div>
				<div className="flex justify-end">
					<button className="p-2 hover:text-red-500">
						<BsTrash3Fill />
					</button>
				</div>
			</div>
		</li>
	);
}
