import { renderComponent, expect } from '../test_helper'
import NavBar from '../../src/components/navbar'

describe('NavBar', () => {
  let component

  beforeEach(() => {
    component = renderComponent(NavBar)
  })

  it('shows a div with class "navbar-brand"', () => {
    expect(component.find('.navbar-brand')).to.exist
  })
})
