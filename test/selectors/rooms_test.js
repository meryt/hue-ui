import { expect } from '../test_helper'
import RoomSelector from '../../src/selectors/rooms'

describe('RoomSelector', () => {
  it('returns empty lists for empty groups', () => {
    expect(RoomSelector({groups: []})).to.deep.equal([])
  })

  it('returns empty list if no rooms', () => {
    expect(RoomSelector({groups:[{id: 1, type: 'Object'}]})).to.deep.equal([])
  })

  it('returns only rooms', () => {
    expect(RoomSelector({groups: [
      {id: 1, type: 'Object'},
      {id: 2, type: 'Room'}
    ]})).to.deep.equal([{id: 2, type: 'Room'}])
  })
})
