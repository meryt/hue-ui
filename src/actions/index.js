import axios from 'axios'

import { HUB, API_KEY } from '../../hue-config.js'
import {
  FETCH_GROUPS
} from './types'

const HUB_URL = `http://${HUB}/api/${API_KEY}`

export function fetchGroups() {
  return {
    type: FETCH_GROUPS,
    payload: axios.get(`${HUB_URL}/groups`)
  }
}
