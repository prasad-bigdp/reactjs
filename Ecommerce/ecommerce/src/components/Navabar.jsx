import React, { useState } from "react"

const Navabar = () => {
	const [mode, setMode] = useState("light")
	const toogleMode = () => {
		if (mode === "light") {
			setMode("dark")
			document.body.style.backgroundColor = "black"
		} else {
			setMode("dark")
			document.body.style.backgroundColor = "white"
		}
	}

	return (
		<div>
			<button>Header</button>
		</div>
	)
}

export default Navabar
