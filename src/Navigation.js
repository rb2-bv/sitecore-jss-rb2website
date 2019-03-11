import React from 'react'
import { withNamespaces } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import logo from './assets/images/logo.svg';

const navsQuick = [
  {
    key: 'what',
    to: '/what',
    text: 'What we do'
  },
  {
    key: 'how',
    to: '/how',
    text: 'How we do this'
  },
  {
    key: 'who',
    to: '/who',
    text: 'Who does this'
  }
]

let Navigation = ({ t, i18n }) => (
  <header className="header">
    <div className="container">
      <div className="header-inner">
        <div className="left-col">
          <NavLink className="logo size-3_2x" to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="right-col">
          <ul className="nav nav-quick clearfix show-desktop">
            {navsQuick.map(nav =>
              <li key={nav.key}>
                <NavLink to={nav}>{nav.text}</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  </header>
)
// inject dictionary props (`t`) into navigation so we can translate it
// NOTE: using this is needed instead of using i18next directly to keep
// the component state updated when i18n state (e.g. current language) changes
Navigation = withNamespaces()(Navigation)

export default Navigation
