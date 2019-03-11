import React from 'react'
import { withPlaceholder } from '@sitecore-jss/sitecore-jss-react'

const WidgetContainer = ({ params, widgetContent }) => (
  <div className={`widget ${params.cssClass || ''}`}>
    <div className="container">{widgetContent}</div>
  </div>
)

export default withPlaceholder({
  placeholder: 'widget-content',
  prop: 'widgetContent'
})(WidgetContainer)
