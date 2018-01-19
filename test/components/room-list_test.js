import { renderComponent, expect } from '../test_helper'
import RoomList from '../../src/components/room-list'

describe('RoomList', () => {
  let component

  beforeEach(() => {
    component = renderComponent(RoomList)
  })

  it('is a list group', () => {
    expect(component).to.have.class('room-list')
  })

})
