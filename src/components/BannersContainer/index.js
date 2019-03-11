import React from 'react';
import { Text, withPlaceholder } from '@sitecore-jss/sitecore-jss-react'

const BannersContainer = ({ fields, banners }) => (
  <div className="widget widget--visual no-padding">
    <div className="container">
      <div className="title-holder">
        <h3>
          <span className="widget-title"><Text field={fields.heading} /></span>
          <span className="widget-subtitle"><Text field={fields.subheading} /></span>
        </h3>
      </div>
    </div>
    { banners }
  </div>
);

export default withPlaceholder('banners')(BannersContainer)
