import axios from 'axios'

import { HUB, API_KEY } from '../../hue-config.js'
import {
  FETCH_GROUPS,
  FETCH_LIGHTS
} from './types'

const HUB_URL = `http://${HUB}/api/${API_KEY}`

export function fetchGroups() {
  return {
    type: FETCH_GROUPS,
    payload: axios.get(`${HUB_URL}/groups`)
  }
}

export function fetchLights() {
  return {
    type: FETCH_LIGHTS,
    payload: axios.get(`${HUB_URL}/lights`)
  }
}
