import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAction } from '../actions/tournaments';

const Tournaments = () => {
  const dispatch = useDispatch();
  const tournaments = useSelector(state => state.tournaments);

  useEffect(() => {
    dispatch(fetchAction());
  }, []);

  console.log(tournaments);

  return <div></div>;
};

export default Tournaments;
