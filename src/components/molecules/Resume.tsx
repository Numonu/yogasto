import { CoreContext } from "../../context/CoreContex";
import useTotal from "../../hooks/useTotal";
import { useContext } from "react";

export default function Resume() {
	const total = useTotal((state) => state.total);
	const { core } = useContext(CoreContext);

	const printResume = () => {
		let result = total;
		core.storage.forEach((e) => {
			return e.items.forEach((e) => {
				const price = Number(e.price);
				if (e.type == "expense") result -= price;
				else result += price;
			});
		});
		return String(result).slice(0,5);
	};

	return (
		<div className="text-white">
			<div className="border-neutral-300 border-b pb-1 mb-1 flex items-center gap-4">
				<div>
					<span className="text-neutral-300">Operaciones : </span>
				</div>
				<div className="grow flex items-center justify-end gap-4">
					{core.storage.map((e) => {
						return e.items.map((e , i) => {
							return (
								<span
									key={`${e.title}_${i}`}
									className={`text-xs ${
										e.type == "expense"
											? "text-red-500"
											: "text-emerald-500"
									}`}
								>
									{e.type == "expense" ? "-" : "+"} ${" "}
									{e.price}
								</span>
							);
						});
					})}
					<span className="text-lg font-light">$ {total}</span>
				</div>
			</div>
			<div className="flex justify-end">
				<span className="text-neutral-400 text-base">
					$ {printResume()}
				</span>
			</div>
		</div>
	);
}
