import { useContext } from "react";
import GroupItem from "../molecules/GroupItem";
import { FaLayerGroup } from "react-icons/fa";
import Legend from "../molecules/Legend";
import { CoreContext } from "../../context/CoreContex";
import useBoolean from "../../hooks/useBoolean";
import CreateGroup from "../molecules/CreateGroup";

export default function CostsAtlas() {
	const { core } = useContext(CoreContext);
	const { control, controlOn, controlOff } = useBoolean();
	return (
		<>
			<aside className="row-start-1 row-end-3">
				<header className="flex justify-between items-center">
					<h2 className="text-neutral-300 mb-4 text-lg font-semibold">
						Grupos
					</h2>
					<Legend>
						Categorizar y agrupar nuestros gastos nos brinda
						claridad financiera, permitiéndonos tomar decisiones más
						informadas y alcanzar nuestras metas económicas con
						mayor eficacia
					</Legend>
				</header>
				<ul className="flex flex-col gap-3 mb-4">
					{core.storage.map((e , i) => (
						<GroupItem title={e.title} order={i} key={`${e.title}_${i}`}/>
					))}
				</ul>
				<button
					className="bg-indigo-500 text-white flex items-center gap-2 p-2 rounded-md hover:bg-indigo-600"
					onClick={controlOn}
				>
					<span className="text-sm">
						<FaLayerGroup />
					</span>
					<span className="text-sm">Crear Grupo</span>
				</button>
			</aside>
			{control && <CreateGroup onClose={controlOff}/>}
		</>
	);
}
