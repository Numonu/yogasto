import CostGroup from "../molecules/CostGroup";

export default function CostsAtlas() {
	return (
		<aside>
			<h2 className="text-neutral-300 mb-4 text-lg font-semibold">
				Grupos
			</h2>
			<ul className="flex flex-col gap-3 mb-4">
				<CostGroup title="Gastos Necesarios"/>
				<CostGroup title="Juegos y otras cosas"/>
				<CostGroup title="Comida"/>
				<CostGroup title="Skins y Pases de batalla"/>
				<CostGroup title="Ropa de mi y mi familia"/>
				<CostGroup title="Cosmeticos para la sala"/>
			</ul>
			<button className="outline-indigo-500 text-indigo-500 p-2 outline-2 outline text-sm rounded-md font-semibold hover:bg-indigo-500 hover:text-white hover:outline-white active:scale-90 transition-[colors_transform]">
				Añadir Nuevo Grupo
			</button>
		</aside>
	);
}
