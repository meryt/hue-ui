import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'

describe('App', () => {
  let component

  beforeEach(() => {
    component = renderComponent(App)
  })

  it('shows a nav bar', () => {
    expect(component.find('.navbar')).to.exist
  })

  it('shows a list of groups', () => {
    expect(component.find('.group-list')).to.exist
  })
})
