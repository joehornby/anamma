import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="logo">ANAMMA.</div>
        <nav>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li className="cta">
              <a href="/">Book now.</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}