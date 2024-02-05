/// <reference types="vitest" />
import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Counter } from '../src/counter'

it('renders a count of 0', () => {
  render(<Counter />)
  const countElement = screen.getByRole('heading')
  expect(countElement).toHaveTextContent('0')
})

it('renders a count of 1', () => {
  render(<Counter initialCount={1} />)
  const countElement = screen.getByRole('heading')
  expect(countElement).toHaveTextContent('1')
})

it('renders a count of 1 after clicking the increment button', async () => {
  user.setup()
  render(<Counter />)
  const incrementButton = screen.getByRole('button', { name: /increment/i })
  await user.click(incrementButton)
  const countElement = screen.getByRole('heading')
  expect(countElement).toHaveTextContent('1')
})
