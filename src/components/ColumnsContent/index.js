import React from 'react'
import { Text, withPlaceholder } from '@sitecore-jss/sitecore-jss-react'

const ColumnsContent = ({ colsContent, fields }) => {
  const colsCount = colsContent.length
  if (colsCount > 12 || 12 % colsCount !== 0) {
    console.warn('incorrect cols')
  }

  const colClass = `col-m-12 col-d-${12 / colsCount} text-col`
  return (
    <div className="widget widget--content">
      <div className="container">
        <div className="title-holder">
          <h2>
            <span className="widget-title">
              <Text field={fields.heading} />
            </span>
            <span
              className="widget-subtitle"
              v-if="$options.filters.asText(info.section_subtitle)"
            >
              <Text field={fields.subheading} />
            </span>
          </h2>
        </div>
        <div className="content content--multi-column end-with-margin">
          <div className="row medium equal-height">
            {colsContent.map((component, index) => {
              if (component.props && component.props.type === 'text/sitecore') {
                return component
              }

              return (
                <div className={colClass} key={index}>
                  {component}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withPlaceholder({
  placeholder: 'cols-content',
  prop: 'colsContent'
})(ColumnsContent)
