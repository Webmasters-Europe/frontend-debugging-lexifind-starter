import React from 'react';

import { SERIF_FONTS, SANS_SERIF_FONTS } from '../lib/constants';

interface HeaderProps {
  font: string;
  setFont: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ font, setFont }) => {
  return (
    <header className="header-container">
      <div className="header-logo-wrapper">
        <img
          src="/LexiFind.webp"
          alt="LexiFind Logo"
          className="header-logo-img"
        />
        <span className="header-logo-text">LexiFind</span>
      </div>

      <select
        value={font}
        onChange={(e) => setFont(e.target.vaule)}
        className="header-select"
        style={{ fontFamily: font }}
      >
        <option value={SERIF_FONTS}>Serif</option>
        <option value={SANS_SERIF_FONTS}>Sans Serif</option>
      </select>
    </header>
  );
};

export default Header;
