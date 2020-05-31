import React from 'react';
import Input from './Input';
import Button from './Button';
import './Header.css';
import Loading from './Loading';

const Header = ({ setQuery, createTournament, loading, error }) => {
  return (
    <div className="header">
      <Input
        disabled={loading || error ? true : false}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search Tournament..."
      />
      <Button onClick={createTournament}>Create Tournament</Button>
    </div>
  );
};

export default Header;
