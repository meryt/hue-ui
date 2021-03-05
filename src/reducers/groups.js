import _ from 'lodash'

import {
  FETCH_GROUPS
} from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_GROUPS:
      let rawPayload = action.payload.data

      let payloadWithKeys = _.mapValues(rawPayload, function(val, key) {
        return {id: key, ...val}
      })

      let payload = _.values(payloadWithKeys)

      return [ ...payload ]
    default:
      return state
  }
}
