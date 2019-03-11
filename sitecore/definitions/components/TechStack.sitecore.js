// eslint-disable-next-line no-unused-vars
import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest
} from '@sitecore-jss/sitecore-jss-manifest'

/**
 * Adds the TechStack component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'TechStack',
    icon: SitecoreIcon.DocumentTag,
    fields: [{ name: 'heading', type: CommonFieldTypes.SingleLineText }],
    placeholders: ['tech-stack-items']
  })
}
