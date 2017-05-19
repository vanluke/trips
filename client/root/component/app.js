import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/scss/font-awesome.scss';
import './_app.scss';

export const App = ({children}) => (
  <div className="l-app ">
    <section className="c-app c-app__nav">
      <header className="c-header">
        <h2 className="c-header__h2">
          My app name here
        </h2>
      </header>
      <nav className="c-nav">
        <ul className="c-nav__list" >
          <li className="c-nav__list-item">
            <a href className="c-nav__link">
              <span className="c-nav__list-item--text">About</span>
              <i className="fa fa-user fa-2x" />
            </a>
          </li>
        </ul>
      </nav>
    </section>
    <section className="c-content">
      {children}
    </section>
  </div>
);

App.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default App;
