import { BsFolder2Open } from "react-icons/bs";

type CostGroupTypes = {
    title : string,
}
export default function CostGroup({title}:CostGroupTypes) {
	return (
		<li>
			<button className="bg-zinc-700 outline-zinc-700 w-full p-4 rounded-md outline-2 group hover:bg-zinc-800 hover:outline">
				<header className="flex items-center justify-between">
					<h3 className="text-neutral-400 group-hover:text-neutral-200">
						{title}
					</h3>
					<button className="text-white group-hover:translate-x-2 transition-transform">
						<BsFolder2Open />
					</button>
				</header>
			</button>
		</li>
	);
}
