import React from 'react';
import { Text, Link, Image } from '@sitecore-jss/sitecore-jss-react';

const BlogPostGridItem = (props) => (
  <div className="article">
    <Link className="ds-block" field={props.fields.link}>
      <div data-ratio="16:9" className="aspect-ratio-box">
        <div className="aspect-ratio-content">
          <div className="img-holder img--cover">
            <Image media={props.fields.image} />
          </div>
        </div>
      </div>
    </Link>

    <div className="text-holder">
      <p className="article__type"><Text field={props.fields.articleType} /></p>
      <div className="article__title-holder no-margin">
        <h2 className="article__title">
          <Link className="a--reverse text-none-underline" field={props.fields.link}>
            <Text field={props.fields.heading} />
          </Link>
        </h2>
      </div>
      <p className="article__author"><Text field={props.fields.authorName} /></p>
      <div>
        <p>
          <Text field={props.fields.summary} encode={false} />
        </p>
      </div>
      <Link className="article__link a--reverse" field={props.fields.link}>READ MORE</Link>
    </div>
  </div>
);

export default BlogPostGridItem;
