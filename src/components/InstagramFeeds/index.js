import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const InstagramFeeds = (props) => (
  <div>
    <p>InstagramFeeds Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default InstagramFeeds;
