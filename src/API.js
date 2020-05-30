// constant

import { API_TOURNAMENTS_URL, API_BASE_URL } from './constants/api';

// api

const get = url => fetch(url);

// functions

export const fetchTournaments = () => get(API_TOURNAMENTS_URL);
