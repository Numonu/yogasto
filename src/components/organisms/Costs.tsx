import { useContext, useState } from "react";
import Item from "../molecules/CostItem";
import { MdOutlineDoubleArrow } from "react-icons/md";
import Legend from "../molecules/Legend";
import { CoreContext } from "../../context/CoreContex";
import useBoolean from "../../hooks/useBoolean";
import CreateItem from "../molecules/CreateItem";
import { TItem } from "../../global/types/TItem";

export default function ItemAtlas() {
	const { core } = useContext(CoreContext);
	const { control, controlOn, controlOff } = useBoolean();

	const [type, setType] = useState<TItem>("profit");

	const openWithType = (newType: TItem) => {
		controlOn();
		setType(newType);
	};

	const groupEnable = !!core.storage[core.focus];

	return (
		<>
			<div>
				<header className="flex justify-between items-center">
					<h2 className="text-neutral-300 mb-4 text-lg font-semibold">
						Gastos
					</h2>
					<Legend>
						Declarar lo que genera ganancias y pérdidas nos ayuda a
						entender qué impulsar y qué mejorar en nuestro camino
						hacia el éxito financiero
					</Legend>
				</header>
				<ul className="flex flex-col gap-3 mb-4">
					{core.storage[core.focus]?.items.map((e, i) => (
						<Item {...e} order={i} key={`${e.title}_${i}`}/>
					))}
				</ul>
				<div className="flex gap-4">
					{groupEnable && (
						<>
							<button
								className="bg-emerald-500 text-white flex gap-2 p-2 rounded-md hover:bg-emerald-600"
								onClick={() => openWithType("profit")}
							>
								<span className="text-lg -rotate-90">
									<MdOutlineDoubleArrow />
								</span>
								<span className="text-sm">Añadir Ganancia</span>
							</button>
							<button
								className="bg-red-500 text-white flex gap-2 p-2 rounded-md hover:bg-red-600"
								onClick={() => openWithType("expense")}
							>
								<span className="text-lg rotate-90">
									<MdOutlineDoubleArrow />
								</span>
								<span className="text-sm">Añadir Gasto</span>
							</button>
						</>
					)}
				</div>
			</div>
			{control && <CreateItem onClose={controlOff} type={type} />}
		</>
	);
}
