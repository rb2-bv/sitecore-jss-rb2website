// eslint-disable-next-line no-unused-vars
import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest
} from '@sitecore-jss/sitecore-jss-manifest'

/**
 * Adds the BlogPost component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'BlogPostGridItem',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'articleType', type: CommonFieldTypes.SingleLineText },
      { name: 'heading', type: CommonFieldTypes.MultiLineText },
      { name: 'authorName', type: CommonFieldTypes.MultiLineText },
      { name: 'summary', type: CommonFieldTypes.MultiLineText },
      { name: 'link', type: CommonFieldTypes.GeneralLink },
      { name: 'image', type: CommonFieldTypes.GeneralLink }
    ]
  })
}
