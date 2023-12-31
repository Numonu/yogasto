import React from "react";
import ReactDOM from "react-dom/client";
import "./global/styles/defaults.css";
import Groups from "./components/organisms/Groups";
import ItemAtlas from "./components/organisms/Costs";
import Resume from "./components/molecules/Resume";
import Total from "./components/molecules/Total";
import CoreProvider from "./context/providers/CoreProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="min-h-screen pb-12">
			<div className="max-w-[1200px] mx-auto px-4">
				<header className="pt-6 mb-8 flex justify-between flex-col md:flex-row">
					<div className="mb-12">
						<h1 className="text-neutral-300 mb-4 text-2xl font-bold">
							Gestor de Gastos
						</h1>
						<h2 className="text-neutral-400 font-light">
							Gestionar nuestros gastos de manera conciente{" "}
							<br className="hidden md:block" />
							nos asegura un futuro prospero.
						</h2>
					</div>
					<div>
						<h2 className="text-neutral-300 mb-4 text-xl font-bold">
							Total
						</h2>
						<Total />
					</div>
				</header>
				<section className="grid gap-12 md:grid-cols-[1fr_3fr] md:grid-rows-[min-content_1fr]">
					<CoreProvider>
						<Groups />
						<ItemAtlas />
						<Resume />
					</CoreProvider>
				</section>
			</div>
		</div>
	</React.StrictMode>
);
