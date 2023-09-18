import { AiOutlineQuestionCircle } from "react-icons/ai";
import Dialog from "../atoms/Dialog";
import { ReactNode } from "react";

type LegendTypes = {
	children: ReactNode;
};
export default function Legend({ children }: LegendTypes) {
	return (
		<Dialog
			owner={
				<span className="text-neutral-300 text-xl">
					<AiOutlineQuestionCircle />
				</span>
			}
		>
			<p className="text-neutral-300 text-sm w-[180px]">{children}</p>
		</Dialog>
	);
}
