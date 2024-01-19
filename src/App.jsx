import { useState } from "react"

export default function App() {

	const [advice, setAdvice] = useState("")

	async function getAdvice() {
		const res = await fetch('https://api.adviceslip.com/advice')
		const data  = await res.json()

		setAdvice(data.slip.advice)
		console.log(data)
	}
	return <div>
		<h1>{advice}</h1>
		<button onClick={getAdvice}>Get Advice</button>
	</div>
}
