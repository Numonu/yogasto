import { useContext } from "react";
import Item from "../molecules/CostItem";
import { MdOutlineDoubleArrow } from "react-icons/md";
import Legend from "../molecules/Legend";
import { CoreContext } from "../../context/CoreContex";

export default function ItemAtlas() {
	const { core } = useContext(CoreContext);
	return (
		<div>
			<header className="flex justify-between items-center">
				<h2 className="text-neutral-300 mb-4 text-lg font-semibold">
					Gastos
				</h2>
				<Legend>
					Declarar lo que genera ganancias y pérdidas nos ayuda a
					entender qué impulsar y qué mejorar en nuestro camino hacia
					el éxito financiero
				</Legend>
			</header>
			<ul className="flex flex-col gap-3 mb-4">
				{ core.storage[core.focus].items.map(e => <Item title={e.title} cost={e.price}/>) }
			</ul>
			<div className="flex gap-4">
				<button className="bg-emerald-500 text-white flex gap-2 p-2 rounded-md hover:bg-emerald-600">
					<span className="text-lg -rotate-90">
						<MdOutlineDoubleArrow />
					</span>
					<span className="text-sm">Añadir Ganancia</span>
				</button>
				<button className="bg-red-500 text-white flex gap-2 p-2 rounded-md hover:bg-red-600">
					<span className="text-lg rotate-90">
						<MdOutlineDoubleArrow />
					</span>
					<span className="text-sm">Añadir Gasto</span>
				</button>
			</div>
		</div>
	);
}
