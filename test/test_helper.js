import _$ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import jsdom from 'jsdom'
import chai, { expect } from 'chai'
import chaiJquery from 'chai-jquery'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'
import { MemoryRouter, Route, Switch } from 'react-router-dom'

const {document} = (new jsdom.JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.navigator = global.window.navigator
const $ = _$(window)

chaiJquery(chai, chai.util, $)

/**
 * Use if your component requires a router. It does not seem
 * possible to pass properties to the component with this version.
 */
function renderComponent(ComponentClass, props = {}, state ={}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <MemoryRouter>
        <Switch>
          <Route path="/" component={ComponentClass} />
        </Switch>
      </MemoryRouter>
    </Provider>
  )

  return $(ReactDOM.findDOMNode(componentInstance))
}

/**
 * Use if your component does not need a router. It is
 * possible to pass properties to the component.
 */
function renderRouterlessComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance))
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value)
  }
  TestUtils.Simulate[eventName](this[0])
}

export { renderComponent, renderRouterlessComponent, expect }
