import React from 'react'
import { render } from '@testing-library/react'
import { useSelector } from 'react-redux'
import SimulationResultsTable from '../SimulationResultsTable'

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}))

describe('SimulationResultsTable component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the component with blank rows', async () => {
    useSelector.mockReturnValue({ simulation: { positions: [] } })

    const { getByText, queryAllByText } = render(<SimulationResultsTable />)

    expect(getByText('Results')).toBeInTheDocument()

    const blankRows = queryAllByText(' ')
    expect(blankRows.length).toBe(0)
  })

  it('renders the component with positions data', async () => {
    const mockPositions = [
      [1, 2, 3, 4],
      [5, 6, 7, 8]
    ]

    useSelector.mockReturnValue({ simulation: { positions: mockPositions } })

    const { getByText, queryByText } = render(<SimulationResultsTable />)

    expect(getByText('Results')).toBeInTheDocument()

    for (const position of mockPositions) {
      for (const value of position) {
        expect(queryByText(value.toString())).toBeInTheDocument()
      }
    }

    const blankRow = queryByText(' ')
    expect(blankRow).toBeInTheDocument()
  })
})
