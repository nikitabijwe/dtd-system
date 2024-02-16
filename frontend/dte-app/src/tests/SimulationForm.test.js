import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { useDispatch } from 'react-redux'
import SimulationForm from '../SimulationForm'
import { simulate } from '../actions/simulationActions'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}))

jest.mock('../actions/simulationActions', () => ({
  simulate: jest.fn()
}))

describe('SimulationForm component', () => {
  let mockDispatch

  beforeEach(() => {
    mockDispatch = jest.fn()
    useDispatch.mockReturnValue(mockDispatch)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the component', () => {
    const { getByText } = render(<SimulationForm />)
    expect(getByText('AI Labs | Full Stack Case Study')).toBeInTheDocument()
  })

  it('updates state on input change', () => {
    const { getByLabelText } = render(<SimulationForm />)
    const x0Input = getByLabelText('x0')

    act(() => {
      fireEvent.change(x0Input, { target: { name: 'x0', value: '123' } })
    })

    expect(x0Input.value).toBe('123')
  })

  it('dispatches simulate action on form submission', () => {
    const { getByText, getByLabelText } = render(<SimulationForm />)
    const runButton = getByText('Run')
    const x0Input = getByLabelText('x0')

    act(() => {
      fireEvent.change(x0Input, { target: { name: 'x0', value: '123' } })
      fireEvent.click(runButton)
    })

    expect(mockDispatch).toHaveBeenCalledWith(
      simulate({
        x0: '123',
        y0: '',
        z0: '',
        sigma: '',
        rho: '',
        beta: '',
        delta_t: ''
      })
    )
  })
})
