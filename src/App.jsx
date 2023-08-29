import React from "react";
import Header from "./components/Header";
import Center from "./components/Center";
import { useState } from "react";
const App = () => {
	const [boardModalOpen, setBoardModalOpen] = useState(false);

	return (
		<div>
			{/* HEADER SECTION */}
			<Header
				boardModalOpen={boardModalOpen}
				setBoardModalOpen={setBoardModalOpen}
			/>

			{/* CENTER SECTION  */}
			<Center />
		</div>
	);
};

export default App;
