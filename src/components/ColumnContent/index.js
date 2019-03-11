import React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';

const ColumnContent = ({ fields }) => (
  <React.Fragment>
    <div>
      <Text encode={false} field={fields.content} />
    </div>
    <div className="margin-top-auto">
      <Link className="btn ds-block-mobile" field={fields.link} />
    </div>
  </React.Fragment>
);

export default ColumnContent;
