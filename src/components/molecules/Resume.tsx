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
		return result.toFixed(2);
	};

	return (
		<div className="text-white whitespace-nowrap">
			<div className="border-neutral-300 border-b pb-1 mb-1 flex flex-col gap-4 md:flex-row md:items-end">
				<div>
					<span className="text-neutral-300 ">Operaciones : </span>
				</div>
				<div className="grow flex flex-col flex-wrap justify-end gap-4  md:flex-row">
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
				</div>
					<span className="text-lg font-light leading-5">$ {total}</span>
			</div>
			<div className="flex md:justify-end">
				<span className="text-neutral-400 text-base">
					$ {printResume()}
				</span>
			</div>
		</div>
	);
}
