import React from 'react'
import { Image } from '@sitecore-jss/sitecore-jss-react'

const FullWidthImage = props => (
  <div className="widget widget--visual no-padding">
    <div className="aspect-ratio-box">
      <div className="aspect-ratio-content">
        <div className="img-holder img--cover">
          <Image media={props.fields.image} />
        </div>
      </div>
    </div>
  </div>
)

export default FullWidthImage
