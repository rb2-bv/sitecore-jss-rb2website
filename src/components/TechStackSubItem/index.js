import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const TechStackSubItem = (props) => (
  <div className="row narrow">
    <div className="col-m-12 col-t-4">
      <span className="item-name"><Text field={props.fields.name} /></span>
    </div>
    <div className="col-m-12 col-t-8">
      <span className="item-value"><Text field={props.fields.content} /></span>
    </div>
  </div>
);

export default TechStackSubItem;
