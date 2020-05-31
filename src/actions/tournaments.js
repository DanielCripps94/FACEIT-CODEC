import {
  fetchTournaments,
  updateTournament,
  deleteTournament,
  createTournament
} from '../API';
import { isEmpty } from '../helpers';

export const fetchAction = () => async dispatch => {
  dispatch({ type: 'FETCH_TOURNAMENTS_REQUEST' });
  try {
    const data = await fetchTournaments();
    if (isEmpty(data)) throw Error('No tournaments found');
    dispatch({ type: 'FETCH_TOURNAMENTS_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'FETCH_TOURNAMENTS_FAILED', payload: err.message });
  }
};

export const createAction = tournament => async dispatch => {
  try {
    const data = await createTournament(tournament);
    dispatch({ type: 'CREATE_TOURNAMENT_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'CREATE_TOURNAMENT_FAILED', payload: err.message });
  }
};

export const updateAction = (id, tournament) => async dispatch => {
  try {
    const data = await updateTournament(id, tournament);
    dispatch({ type: 'UPDATE_TOURNAMENT_NAME', payload: data });
  } catch (err) {
    dispatch({ type: 'UPDATE_TOURNAMENT_FAILED', payload: err.message });
  }
};

export const deleteAction = id => async dispatch => {
  try {
    await deleteTournament(id);
    dispatch({ type: 'DELETE_TOURNAMENT', payload: { id } });
  } catch (err) {
    dispatch({ type: 'DELETE_TOURNAMENT_FAILED', payload: err.message });
  }
};
