import React from 'react';
import { Text, Image, withPlaceholder } from '@sitecore-jss/sitecore-jss-react';

const TechStack = ({ fields, techStackSubItems }) => (
  <div className="box__row">
    <div className="row narrow col--vertical-center">
      <div className="col-m-12 col-t-4">
        <div className="item-label">
          <div className="row narrow fixed-flex col--vertical-center">
            <div className="col-fixed">
              <span className="item-label__icon">
                <Image media={fields.icon} />
              </span>
            </div>
            <div className="col-flex">
              <strong className="item-label__title">
                <Text field={fields.name} />
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="col-m-12 col-t-8">
        { techStackSubItems }
      </div>
    </div>
  </div>
);

export default withPlaceholder({ placeholder: 'tech-stack-subitems', prop: 'techStackSubItems' })(TechStack)