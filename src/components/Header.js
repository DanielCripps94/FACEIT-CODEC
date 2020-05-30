import React from 'react';
import Input from './Input';
import Button from './Button';
import './Header.css';

const Header = ({ setQuery, createTournament }) => {
  return (
    <div className="header">
      <Input
        onChange={e => setQuery(e.target.value)}
        placeholder="Search Tournament..."
      />
      <Button onClick={createTournament}>Create Tournament</Button>
    </div>
  );
};

export default Header;
