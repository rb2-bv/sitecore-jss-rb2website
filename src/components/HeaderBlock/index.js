import React from 'react'
import { Text } from '@sitecore-jss/sitecore-jss-react'
import './header.css'
import cs from 'classnames'

const HeaderBlock = props => (
  <div className="widget widget--statement">
    <div className="container">
      <div className="flex-vertical-wrap">
        <div className="vertical-box">
          <div className="text-holder">
            <h1 className={cs({'title-holder': props.fields.description != null})}>
              <span className="widget-title">
                <Text
                  className="HeaderBlock_title"
                  field={props.fields.heading}
                />
              </span>
              <span className="widget-subtitle">
                <Text
                  className="HeaderBlock_subtitle"
                  field={props.fields.subheading}
                />
              </span>
            </h1>
            {props.fields.description != null && (
              <div className="content">
                <p><Text field={props.fields.description} /></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HeaderBlock
