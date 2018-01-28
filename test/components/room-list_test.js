import { renderComponent, expect } from '../test_helper'
import RoomList from '../../src/components/room-list'

describe('RoomList', () => {
  let component

  beforeEach(() => {
    component = renderComponent(RoomList, {
      type: 'Room',
      title: 'Rooms'
    })
  })

  it('contains a list group', () => {
    expect(component.find('.room-list')).to.exist
  })

})
