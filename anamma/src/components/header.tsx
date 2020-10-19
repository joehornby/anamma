import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="header__inner">
        <div className="logo">ANAMMA.</div>
        <nav>
          <u>
            <li>
              <a href="/">About</a>
            </li>
            <li className="cta">
              <a href="/">Book now.</a>
            </li>
          </u>
        </nav>
      </div>
    </header>
  )
}