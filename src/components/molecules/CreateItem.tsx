import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import Modal from "../atoms/Modal";
import { BsCurrencyDollar } from "react-icons/bs";
import { TItem } from "../../global/types/TItem";
import { CoreContext } from "../../context/CoreContex";
import MAX_PRICE from "../../global/constants/maxPrice";

type CreateItemTypes = {
	onClose: () => void;
	type: TItem;
};
const CreateItem: FC<CreateItemTypes> = ({ onClose, type }) => {

    const { handleAddItem } = useContext(CoreContext);

    const [data , setData] = useState({
        title : "",
        price : "",
    })
    
    const titles = {
        profit: "Crea una nueva Ganancia",
        expense: "Crea un nuevo Gasto",
    };

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {

		let newValue : number | string = Number(e.target.value);
		if(Number.isNaN(newValue)) newValue = e.target.value;
		else newValue = Math.min(newValue , MAX_PRICE);

        setData({
            ...data,
            [e.target.name] : newValue
        })
    }

	const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddItem(data.title , data.price , type);
        onClose();
    };

	return (
		<Modal onClose={onClose} title={titles[type]}>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<input
					className="bg-zinc-900 text-neutral-400 outline-neutral-500 p-2 rounded-md outline outline-2 hover:outline-white focus:outline-white"
					autoFocus
                    name="title"
					type="text"
					placeholder="Nombre del Item"
                    onChange={handleChange}
				/>
				<div className="bg-zinc-900 text-neutral-400 outline-neutral-500 w-1/2 p-2 flex gap-2 items-center outline outline-2 rounded-md hover:outline-white focus:outline-white">
					<span className="">
						<BsCurrencyDollar />
					</span>
					<input
						className="bg-transparent grow outline-none min-w-0"
						type="number"
                        name="price"
						step={0.01}
						value={data.price}
                        onChange={handleChange}
						min={0}
						max={MAX_PRICE}
					/>
				</div>
				<button className="bg-indigo-500 text-white w-max py-2 px-6 rounded-md hover:bg-indigo-600">
					Guardar
				</button>
			</form>
		</Modal>
	);
};

export default CreateItem;
