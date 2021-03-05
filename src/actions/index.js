import axios from 'axios'

import { HUB, API_KEY } from '../../hue-config.js'
import {
  FETCH_GROUPS,
  FETCH_LIGHTS,
  TOGGLE_GROUP,
  TOGGLE_LIGHT
} from './types'

const HUB_URL = `http://${HUB}/api/${API_KEY}`

export function fetchGroups() {
  console.log('GET groups')
  return {
    type: FETCH_GROUPS,
    payload: axios.get(`${HUB_URL}/groups`)
  }
}

export function fetchLights() {
  console.log('GET lights')
  return {
    type: FETCH_LIGHTS,
    payload: axios.get(`${HUB_URL}/lights`)
  }
}

export function toggleGroup(groupId, turnOn) {
  console.log('PUT group on/off')
  axios.put(`${HUB_URL}/groups/${groupId}/action`, {'on': turnOn})
  /*
  return {
    type: TOGGLE_GROUP,
    payload: axios.get(`${HUB_URL}/groups`)
  }
  */
  return fetchGroups()
}

export function toggleLight(lightId, turnOn) {
  console.log('PUT light on/off')
  axios.put(`${HUB_URL}/lights/${lightId}/state`, {'on': turnOn})
  return {
    type: TOGGLE_LIGHT,
    payload: axios.get(`${HUB_URL}/lights`)
  }
}
