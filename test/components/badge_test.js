import { renderRouterlessComponent, expect } from '../test_helper'
import Badge from '../../src/components/badge'

describe('Badge', () => {
  let component

  it('is an empty span if count is 0', () => {
    component = getBadgeForProps(0, true)
    expect(component).to.not.have.class('badge')
  })

  it('is not empty if count 0 but not suppressible', () => {
    component = getBadgeForProps(0, false)
    expect(component).to.have.class('badge')
    expect(component).to.have.text('0')
  })

  it('is not empty if count greater than 0 but suppressible', () => {
    component = getBadgeForProps(10, true)
    expect(component).to.have.class('badge')
    expect(component).to.have.text('10')
  })
})

function getBadgeForProps(count, suppressible) {
  return renderRouterlessComponent(Badge, {
    count: count,
    suppressible: suppressible ? 'true' : false
  })
}
