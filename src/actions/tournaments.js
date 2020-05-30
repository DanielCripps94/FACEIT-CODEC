import { fetchTournaments } from '../API';

export const fetchAction = () => async dispatch => {
  dispatch({ type: 'FETCH_TOURNAMENTS_REQUEST' });
  try {
    const data = await fetchTournaments();
    dispatch({ type: 'FETCH_TOURNAMENTS_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'FETCH_TOURNAMENTS_FAILED', payload: err });
  }
};
