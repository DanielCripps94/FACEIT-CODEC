import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAction } from '../actions/tournaments';
import { Loading } from './Loading';
import { Tournament } from './Tournament';
import './Tournaments.css';
import { updateTournament, deleteTournament } from '../API';

const Tournaments = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.tournaments);

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch]);

  const renderTournaments = () => {
    return data.map(tournament => (
      <Tournament
        key={tournament.id}
        tournament={tournament}
        editTournament={editTournament}
        deleteTournament={removeTournament}
      />
    ));
  };

  const editTournament = (id, name) => {
    const newName = window.prompt('New Tournament Name', name);
    if (!newName) return;
    dispatch({
      type: 'UPDATE_TOURNAMENT_NAME',
      payload: { id, name: newName }
    });
    updateTournament(id, { name: newName });
  };

  const removeTournament = id => {
    const res = window.confirm('Do you really want to delete this tournament?');
    if (!res) return;
    dispatch({ type: 'DELETE_TOURNAMENT', payload: { id } });
    deleteTournament(id);
  };

  return (
    <div className="tournaments-wrapper">
      {loading ? <Loading /> : renderTournaments()}
    </div>
  );
};

export default Tournaments;
