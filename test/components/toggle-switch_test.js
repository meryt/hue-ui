import { renderRouterlessComponent, expect } from '../test_helper'
import ToggleSwitch from '../../src/components/toggle-switch'

describe('ToggleSwitch', () => {
  it('is present if checked property equals true', () => {
    let component = renderComponentForProps('true')
    expect(component).to.have.class('switch')
  })

  it('is present if checked property missing', () => {
    let component = renderRouterlessComponent(ToggleSwitch)
    expect(component).to.have.class('switch')
  })

})


function renderComponentForProps(checked) {
  return renderRouterlessComponent(ToggleSwitch, { checked: checked })
}
