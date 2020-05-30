const initialState = {
  loading: false,
  data: [],
  error: null
};

export default function tournaments(state = initialState, action) {
  if (action.type === 'FETCH_TOURNAMENTS_REQUEST') {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === 'FETCH_TOURNAMENTS_SUCCESS') {
    return {
      ...state,
      loading: false,
      data: action.payload
    };
  }

  if (action.type === 'FETCH_TOURNAMENTS_FAILED') {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  }
  return state;
}

// fetch
// loading
// success
// fail
