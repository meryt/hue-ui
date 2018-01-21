import React from 'react'

/**
 * Render a bootstrap badge
 *
 * props:
 *  count = required; number to display in badge
 *  suppressible = optional; if "true", the badge will not display if count is 0
 *  colorClass = optional; bootstrap color class to display, defaults to "light"
 */
export default function Badge(props) {
  if (props.count == 0 && props.suppressible == 'true') {
    return <span />
  } else {
    return (
      <span className={`badge badge-${props.colorClass || 'light'} badge-pill`}>{props.count}</span>
    )
  }
}
