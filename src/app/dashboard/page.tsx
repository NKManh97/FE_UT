import React from 'react'

export default function DashBoard() {
	return (
		<div>
			<h1>Hello world</h1>

			<button disabled={true}>click </button>
			<p data-testid="paragraph-blue" className="blue">
				This is my paragraph
			</p>
		</div>
	)
}
