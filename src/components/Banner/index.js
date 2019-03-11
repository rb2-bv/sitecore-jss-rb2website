import React from 'react';
import { Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';
import { NavLink } from 'react-router-dom'

const Banner = (props) => (
  <div className="aspect-ratio-box">
    <div className="aspect-ratio-content with-overlay">
      <Image className="img-holder img--cover" media={props.fields.image} />
      <div className="vertical-box">
        <div className="container full-width-object">
          <div className="logo-holder">
            <Image media={props.fields.logo} />
          </div>
          <div className="text-holder">
            <div className="title-holder gap-static">
              <Link className="a--reverse text-none-underline" field={props.fields.link}>
                <h2 className="widget-title text-white"><Text field={props.fields.heading} /></h2>
                <h3 className="widget-subtitle text-white"><Text field={props.fields.subheading} /></h3>
              </Link>
            </div>

            <div className="btn-holder">
              <NavLink to={props.fields.link.value.href}  className="btn btn-primary">Link</NavLink>/>
              {/*
                // TBD: Sitecore's Link helper component will force the page to reload
                <Link className="btn btn-primary" field={props.fields.link} />
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
