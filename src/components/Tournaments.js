import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAction } from '../actions/tournaments';
import { Loading } from './Loading';
import { Tournament } from './Tournament';

const Tournaments = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.tournaments);

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch]);

  const renderTournaments = () => {
    return data.map(tournament => <Tournament />);
  };

  return <div>{loading ? <Loading /> : renderTournaments()}</div>;
};

export default Tournaments;
