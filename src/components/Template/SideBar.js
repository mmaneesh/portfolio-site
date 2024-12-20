import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Maneesh Maddala</h2>
        <p>
          <a href="mailto:maneesh.maddala@gmail.com">maneesh.maddala@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      {/* TODO */}
      <p>
        Hi, I’m a seasoned Software Development Engineer in Test with a proven record of success
        in the IT and services industry. Over the years, I’ve developed deep expertise in designing
        and implementing robust automated testing frameworks, using tools like Cypress,
        Playwright, WebdriverIO, and Selenium WebDriver.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Maneesh Maddala <Link to="https://mmaneesh.github.io/portfolio-site/">https://mmaneesh.github.io/portfolio-site/</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
