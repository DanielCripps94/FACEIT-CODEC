import React from 'react';
import Input from '../Input';
import Button from '../Button';
import './Header.css';

const Header = ({
  searchTournaments,
  setQuery,
  createTournament,
  loading,
  error
}) => {
  return (
    <div className="header">
      <form onSubmit={e => searchTournaments(e)}>
        <Input
          disabled={loading ? true : false}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search Tournament..."
        />
      </form>
      <Button onClick={createTournament}>Create Tournament</Button>
    </div>
  );
};

export default Header;
