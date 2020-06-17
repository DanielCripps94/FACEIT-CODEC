import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAction,
  updateAction,
  deleteAction,
  createAction,
  searchAction
} from '../../actions/tournaments';
import { Loading } from '../Loading/Loading';
import { Tournament } from '../Tournament/Tournament';
import './Tournaments.css';
import Header from '../Header/Header';
import Error from '../Error/Error';

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

  const createTournament = () => {
    const name = window.prompt('Tournament Name:');
    if (!name) return;
    dispatch(createAction({ name }));
  };

  const searchTournaments = e => {
    e.preventDefault();
    dispatch(searchAction(query));
  };

  const renderTournaments = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error dispatch={dispatch} fetchAction={fetchAction} />;
    } else if (data.length === 0) {
      return <p className="no-result">No results found...</p>;
    } else if (data && data.length > 0) {
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
      <Header
        error={error}
        loading={loading}
        createTournament={createTournament}
        setQuery={setQuery}
        dispatch={dispatch}
        searchTournaments={searchTournaments}
      />
      <div className="tournaments-wrapper">{renderTournaments()}</div>
    </>
  );
};

export default Tournaments;
