import { BsCurrencyDollar } from "react-icons/bs";

export default function Total() {
	return (
		<div className="text-neutral-400 outline-indigo-500 max-w-sm px-2 py-4 flex gap-2 items-center text-3xl outline outline-1 rounded-md">
			<span className="">
				<BsCurrencyDollar />
			</span>
			<input
				className="bg-transparent outline-none min-w-0"
				type="number"
				step={0.01}
                placeholder="0.00"
			/>
		</div>
	);
}
