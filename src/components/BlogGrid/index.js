import React from 'react';
import { Text, withPlaceholder } from '@sitecore-jss/sitecore-jss-react'

const BlogGrid = ({ fields, blogPosts }) => (
  <div className="widget padding-bottom-0">
    <div className="container">
      <div className="title-holder">
        <h3>
          <span className="widget-title"><Text field={fields.heading} /></span>
          <span className="widget-subtitle"><Text field={fields.subheading} /></span>
        </h3>
      </div>
      <div className="row">
        {blogPosts.map((component, index) =>
          (component.props && component.props.type === 'text/sitecore')
            ? component
            : <div className="col-m-12 col-t-6 col-d-4" key={index}>
                {component}
              </div>
        )}
      </div>
    </div>
  </div>
);

export default withPlaceholder({ placeholder: 'blog-posts', prop: 'blogPosts'})(BlogGrid)
