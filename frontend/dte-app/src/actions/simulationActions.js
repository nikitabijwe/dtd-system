import { SIMULATE_SUCCESS } from './types'
import config from '../config'

export const simulate = (initialConditions) => async (dispatch) => {
  try {
    const apiUrl = process.env.NODE_ENV === 'prod' ? config.prod.apiUrl : config.dev.apiUrl

    const body = JSON.stringify({
      initial_conditions: {
        x: parseFloat(initialConditions.x0),
        y: parseFloat(initialConditions.y0),
        z: parseFloat(initialConditions.z0)
      },
      parameters: {
        sigma: parseFloat(initialConditions.sigma),
        rho: parseFloat(initialConditions.rho),
        beta: parseFloat(initialConditions.beta),
        delta_t: parseFloat(initialConditions.delta_t),
        N: 20
      }
    })

    const xhr = new XMLHttpRequest()
    xhr.open('POST', apiUrl)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText)
        dispatch({ type: SIMULATE_SUCCESS, payload: response.positions })
      } else {
        console.error('Request failed with status:', xhr.status)
      }
    }
    xhr.onerror = function () {
      console.error('Request failed')
    }
    xhr.send(body)
  } catch (err) {
    console.error(err)
  }
}
