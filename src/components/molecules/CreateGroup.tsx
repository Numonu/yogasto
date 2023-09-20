import { FC, useContext, useState } from "react";
import Modal from "../atoms/Modal";
import { CoreContext } from "../../context/CoreContex";

const CreateGroup: FC<{ onClose: () => void }> = ({ onClose }) => {
	const { handleAddGroup } = useContext(CoreContext);
	const [name, setName] = useState("");

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddGroup(name);
        onClose();
    }

	return (
		<Modal onClose={onClose} title="Crear un Nuevo Grupo">
			<form
				className="flex flex-col gap-4"
				onSubmit={handleSubmit}
			>
				<input
					className="bg-zinc-900 text-neutral-400 outline-neutral-500 p-2 rounded-md outline outline-2 hover:outline-white focus:outline-white"
                    autoFocus
					type="text"
					placeholder="Nuevo Grupo"
					onChange={(e) => setName(e.target.value)}
				/>
				<button className="bg-indigo-500 text-white w-max py-2 px-6 rounded-md hover:bg-indigo-600">
					Guardar
				</button>
			</form>
		</Modal>
	);
};

export default CreateGroup;
