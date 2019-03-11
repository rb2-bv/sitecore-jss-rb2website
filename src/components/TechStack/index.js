import React from 'react';
import { Text, withPlaceholder } from '@sitecore-jss/sitecore-jss-react';

const TechStack = ({ fields, techStackItems }) => (
  <div className="widget widget--visual no-padding" v-if="banner || technicalBox">
    <div className="box box--green-bg">
      <div className="container">
        <h2 className="widget-title text-white"><Text field={fields.heading} /></h2>
        { techStackItems }
      </div>
    </div>
  </div>
);

export default withPlaceholder({ placeholder: 'tech-stack-items', prop: 'techStackItems' })(TechStack)