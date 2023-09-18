import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/defaults.css";
import Groups from "./components/organisms/Groups";
import ItemAtlas from "./components/organisms/ItemAtlas";
import Resume from "./components/molecules/Resume";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="bg-zinc-900 min-h-screen">
			<div className="max-w-[1200px] mx-auto px-4">
				<header className="pt-6 mb-8">
					<h1 className="text-neutral-300 mb-4 text-2xl font-bold">
						Gestor de Gastos
					</h1>
					<h2 className="text-neutral-400 font-light">
						Gestionar nuestros gastos de manera conciente nos
						asegura un futuro prospero.
					</h2>
				</header>
				<section className="grid gap-12 md:grid-cols-[1fr_3fr] md:grid-rows-[min-content_1fr]">
					<Groups />
					<ItemAtlas />
					<Resume/>
				</section>
			</div>
		</div>
	</React.StrictMode>
);
