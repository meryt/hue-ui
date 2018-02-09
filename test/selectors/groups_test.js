import { expect } from '../test_helper'
import { RoomsSelector } from '../../src/selectors/groups'

describe('RoomsSelector', () => {
  it('returns empty lists for empty groups', () => {
    expect(RoomsSelector({groups: []})).to.deep.equal([])
  })

  it('returns empty list if no rooms', () => {
    expect(RoomsSelector({groups:[{id: 1, type: 'Object'}]})).to.deep.equal([])
  })

  it('returns only rooms', () => {
    expect(RoomsSelector({groups: [
      {id: 1, type: 'Object'},
      {id: 2, type: 'Room'}
    ]})).to.deep.equal([{id: 2, type: 'Room'}])
  })
})
