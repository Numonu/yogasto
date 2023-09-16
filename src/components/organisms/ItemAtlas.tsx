import Item from "../molecules/Item";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function ItemAtlas() {
	return (
		<div>
			<h2 className="text-neutral-300 mb-4 text-lg font-semibold">
				Gastos
			</h2>
			<ul className="flex flex-col gap-3 mb-4">
				<Item title="PS5" cost={700} />
				<Item title="Assasins Creed Mirage" cost={50} />
				<Item title="Dark Souls Scholars of the first Sin" cost={120} />
			</ul>
			<div className="flex gap-4">
				<button className="bg-emerald-500 text-white flex gap-2 p-2 rounded-md">
					<span className="text-lg -rotate-90">
						<MdOutlineDoubleArrow />
					</span>
					<span className="text-sm">Añadir Ganancia</span>
				</button>
                <button className="bg-red-500 text-white flex gap-2 p-2 rounded-md">
					<span className="text-lg rotate-90">
						<MdOutlineDoubleArrow />
					</span>
					<span className="text-sm">Añadir Gasto</span>
				</button>
			</div>
		</div>
	);
}
