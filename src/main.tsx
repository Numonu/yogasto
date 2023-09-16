import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/defaults.css";
import "./styles/gramatic.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="bg-zinc-900 min-h-screen">
			<div className="max-w-[1200px] mx-auto px-4">
				<header className="py-6">
					<h1 className="text-neutral-300 title text-2xl font-bold">
						Gestor de Gastos
					</h1>
          <h2 className="text-neutral-300 font-light description">
            Gestionar nuestros gastos de manera conciente nos asegura un futuro prospero.
					</h2>
				</header>
			</div>
		</div>
	</React.StrictMode>
);
