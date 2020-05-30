// constant

import { API_TOURNAMENTS_URL, API_BASE_URL } from './constants/api';

// api

const get = url => fetch(url).then(resp => resp.json());

const patch = (url, id, bodyObject) => {
  return fetch(url + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(bodyObject)
  }).then(resp => resp.json());
};

const post = (url, bodyObject) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(bodyObject)
  }).then(resp => resp.json());
};

const destroy = (url, id) => {
  return fetch(url + id, {
    method: 'DELETE'
  });
};
// functions

export const fetchTournaments = () => get(API_TOURNAMENTS_URL);

export const updateTournament = (id, tournament) =>
  patch(API_TOURNAMENTS_URL, id, tournament);

export const deleteTournament = id => destroy(API_TOURNAMENTS_URL, id);

export const createTournament = tournament =>
  post(API_TOURNAMENTS_URL, tournament);
