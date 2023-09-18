export default function Resume() {
	return (
		<div className="text-white">
			<div className="border-neutral-300 border-b pb-1 mb-1 flex items-center gap-4">
				<div>
					<span className="text-neutral-300">Operaciones : </span>
				</div>
				<div className="grow flex items-center justify-end gap-4">
					<span className="text-red-500 text-xs">- $ 32.35</span>
					<span className="text-emerald-500 text-xs">+ $ 10.35</span>
					<span className="text-lg font-light">$ 75.50</span>
				</div>
			</div>
			<div className="flex justify-end">
				<span className="text-neutral-400 text-base">$ 125.34</span>
			</div>
		</div>
	);
}
