import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/defaults.css";
import CostsGroup from "./components/organisms/CostsGroup";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="bg-zinc-900 min-h-screen">
			<div className="max-w-[1200px] mx-auto px-4">
				<header className="pt-6 mb-16">
					<h1 className="text-neutral-300 mb-4 text-2xl font-bold">
						Gestor de Gastos
					</h1>
          <h2 className="text-neutral-300 font-light">
            Gestionar nuestros gastos de manera conciente nos asegura un futuro prospero.
					</h2>
				</header>
        <CostsGroup/>
			</div>
		</div>
	</React.StrictMode>
);
