import { ReactNode } from "react";

type DialogTypes = {
	owner: ReactNode;
	children: ReactNode;
};
export default function Dialog({ children, owner }: DialogTypes) {
	return (
		<div className="group relative">
			{owner}
			<article className="bg-neutral-800 p-4 absolute left-0 bottom-0 -translate-x-full translate-y-full rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
				{children}
			</article>
		</div>
	);
}
