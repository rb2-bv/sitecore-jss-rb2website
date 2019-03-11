import React from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import Helmet from 'react-helmet';
// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
import './assets/app.css';
import './assets/scss/app.scss';
import Navigation from './Navigation'
import AppFooter from './AppFooter'

const Layout = ({ route }) => (
  <>
    {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'rb2'}
      </title>
    </Helmet>

    {/*
      VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
      If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
      For XM (CMS-only) apps, this should be removed.

      VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
    */}
    <VisitorIdentification />

    <Navigation />

    {/* root placeholder for the app, which we add components to using route data */}
    <main className="main">
      <Placeholder name="jss-main" rendering={route} />
    </main>

    <AppFooter />
  </>
);

export default Layout;
