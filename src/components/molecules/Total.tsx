import { BsCurrencyDollar } from "react-icons/bs";
import useTotal from "../../hooks/useTotal";

export default function Total() {

	const {total , updateTotal} = useTotal((state) => state);

	return (
		<div className="text-neutral-400 outline-indigo-500 max-w-sm px-2 py-4 flex gap-2 items-center text-3xl outline outline-1 rounded-md">
			<span className="">
				<BsCurrencyDollar />
			</span>
			<input
				className="bg-transparent outline-none min-w-0"
				type="number"
				step={0.01}
				value={total}
                defaultValue={0}
				onChange={e => updateTotal(Number(e.target.value))}
			/>
		</div>
	);
}
