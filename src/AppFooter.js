import React from 'react'
import { withNamespaces } from 'react-i18next'
import { NavLink } from 'react-router-dom'

let AppFooter = ({ t, i18n }) => (
  <footer className="footer">
    <div className="container">
      <div className="dividing-line"></div>
    </div>
    <div className="widget">
      <div className="container">
        <div className="title-holder">
          <h4>
            <span className="widget-title">We would like to meet you!</span>
            <span className="widget-subtitle">Which way suits you?</span>
          </h4>
        </div>
        <div className="row no-gap col--center">
          <div className="col-m-12">
            <div className="footer__links">
              <div className="link-item">
                <button className="btn-less text-underline text-black">Please call me</button>
              </div>
              <div className="link-item">
                <button className="btn-less text-underline text-black">Send me an e-mail</button>
              </div>
              <div className="link-item">
                <button className="btn-less text-underline text-black">Send me a Whatsapp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__copyright">
      <div className="container">
        <div className="row no-gap col--vertical-center hack-transition">
          <div className="col-m-12 col-t-4 last-t">
            {/* <switch-language /> */}
          </div>
          <div className="col-m-12 col-t-4 first-t">
            <ul className="useful-links">
              <li>
                <NavLink to="/pivacy">Privacy statement</NavLink>
              </li>
              <li>
                <NavLink to="/pivacy">Terms and conditions</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-m-12 col-t-4">
            <p className="copyright"><span>© rb2 2018 and beyond</span></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

AppFooter = withNamespaces()(AppFooter)

export default AppFooter
