import CostGroup from "../molecules/CostGroup";
import { FaLayerGroup } from "react-icons/fa";

export default function CostsAtlas() {
	return (
		<aside className="row-start-1 row-end-3">
			<h2 className="text-neutral-300 mb-4 text-lg font-semibold">
				Grupos
			</h2>
			<ul className="flex flex-col gap-3 mb-4">
				<CostGroup title="Gastos Necesarios" />
				<CostGroup title="Juegos y otras cosas" />
				<CostGroup title="Comida" />
				<CostGroup title="Skins y Pases de batalla" />
				<CostGroup title="Ropa de mi y mi familia" />
				<CostGroup title="Cosmeticos para la sala" />
			</ul>
			<button className="bg-indigo-500 text-white flex items-center gap-2 p-2 rounded-md">
				<span className="text-sm">
					<FaLayerGroup />
				</span>
				<span className="text-sm">Crear Grupo</span>
			</button>
		</aside>
	);
}
