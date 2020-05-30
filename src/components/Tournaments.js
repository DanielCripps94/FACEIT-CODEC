import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAction,
  updateAction,
  deleteAction
} from '../actions/tournaments';
import { Loading } from './Loading';
import { Tournament } from './Tournament';
import './Tournaments.css';
import Header from './Header';

const Tournaments = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const { loading, data, error } = useSelector(state => state.tournaments);

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch]);

  const editTournament = (id, name) => {
    const newName = window.prompt('New Tournament Name', name);
    if (!newName) return;
    dispatch(updateAction(id, { name: newName }));
  };

  const removeTournament = id => {
    const res = window.confirm('Do you really want to delete this tournament?');
    if (!res) return;
    dispatch(deleteAction(id));
  };

  const renderTournaments = () => {
    if (query) {
      return data
        .filter(tournament =>
          tournament.name.toLowerCase().includes(query.toLowerCase())
        )
        .map(tournament => (
          <Tournament
            key={tournament.id}
            tournament={tournament}
            editTournament={editTournament}
            deleteTournament={removeTournament}
          />
        ));
    } else {
      return data.map(tournament => (
        <Tournament
          key={tournament.id}
          tournament={tournament}
          editTournament={editTournament}
          deleteTournament={removeTournament}
        />
      ));
    }
  };

  return (
    <>
      <Header setQuery={setQuery} />
      <div className="tournaments-wrapper">
        {loading ? <Loading /> : renderTournaments()}
      </div>
    </>
  );
};

export default Tournaments;
