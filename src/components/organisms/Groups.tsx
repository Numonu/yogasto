import GroupItem from "../molecules/GroupItem";
import { FaLayerGroup } from "react-icons/fa";
import Legend from "../molecules/Legend";

export default function CostsAtlas() {
	return (
		<aside className="row-start-1 row-end-3">
			<header className="flex justify-between items-center">
				<h2 className="text-neutral-300 mb-4 text-lg font-semibold">
					Grupos
				</h2>
				<Legend>
					Categorizar y agrupar nuestros gastos nos brinda claridad
					financiera, permitiéndonos tomar decisiones más informadas y
					alcanzar nuestras metas económicas con mayor eficacia
				</Legend>
			</header>
			<ul className="flex flex-col gap-3 mb-4">
				<GroupItem title="Gastos Necesarios" />
				<GroupItem title="Juegos y otras cosas" />
				<GroupItem title="Comida" />
				<GroupItem title="Skins y Pases de batalla" />
				<GroupItem title="Ropa de mi y mi familia" />
				<GroupItem title="Cosmeticos para la sala" />
			</ul>
			<button className="bg-indigo-500 text-white flex items-center gap-2 p-2 rounded-md hover:bg-indigo-600">
				<span className="text-sm">
					<FaLayerGroup />
				</span>
				<span className="text-sm">Crear Grupo</span>
			</button>
		</aside>
	);
}
