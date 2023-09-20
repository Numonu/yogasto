import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { MdOutlineCancel } from "react-icons/md";

type ModalTypes = {
	children: ReactNode;
	onClose: () => void;
};

const Modal: FC<ModalTypes> = ({ children, onClose }) => {
	return createPortal(
		<div
			className="bg-black bg-opacity-50 backdrop-blur-sm fixed left-0 top-0 w-screen h-screen px-4 grid place-items-center"
			onClick={onClose}
		>
			<div
				className="bg-zinc-800 w-full max-w-[600px] p-4 rounded-md"
				onClick={(e) => e.stopPropagation()}
			>
                <div className="flex justify-end">
                    <button className="text-neutral-300 text-3xl" onClick={onClose}>
                        <MdOutlineCancel/>
                    </button>
                </div>
				{children}
			</div>
		</div>,
		document.body
	);
};
export default Modal;
