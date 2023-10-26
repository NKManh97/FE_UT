import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import DashBoard from '@/app/dashboard/page'

describe('Dashboard page ', () => {
	it('Should render property', () => {
		render(<DashBoard />)
		const header = screen.getByRole('heading')
		const headerText = 'Hello world'
		expect(header).toHaveTextContent(headerText)
	})
	it('Should have a disable button', () => {
		render(<DashBoard />)
		const buttonElement = screen.getByRole('button')
		expect(buttonElement).toBeDisabled()
	})
	it('Should have a p tag with className of blue', () => {
		render(<DashBoard />)
		const pElement = screen.getByTestId('paragraph-blue')
		expect(pElement).toHaveClass('blue')
		expect(pElement).toHaveTextContent('This is my paragraph')
	})
})
