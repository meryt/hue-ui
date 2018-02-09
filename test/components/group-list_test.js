import { renderComponent, expect } from '../test_helper'
import GroupList from '../../src/components/group-list'

describe('GroupList', () => {
  let component

  beforeEach(() => {
    component = renderComponent(GroupList, {
      type: 'Room',
      title: 'Rooms'
    })
  })

  it('contains a list group', () => {
    expect(component.find('.group-list')).to.exist
  })

})
