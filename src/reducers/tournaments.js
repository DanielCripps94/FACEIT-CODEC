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

  if (action.type === 'UPDATE_TOURNAMENT_NAME') {
    let newData = state.data.map(t =>
      t.id === action.payload.id
        ? { ...t, name: action.payload.name }
        : { ...t }
    );
    return {
      ...state,
      data: newData
    };
  }

  if (action.type === 'UPDATE_TOURNAMENT_FAILED') {
    return {
      ...state,
      error: action.payload
    };
  }

  if (action.type === 'DELETE_TOURNAMENT') {
    let newData = state.data.filter(t => t.id !== action.payload.id);
    return {
      ...state,
      data: newData
    };
  }

  if (action.type === 'DELETE_TOURNAMENT_FAILED') {
    return {
      ...state,
      error: action.payload
    };
  }

  if (action.type === 'CREATE_TOURNAMENT_SUCCESS') {
    return {
      ...state,
      data: [action.payload, ...state.data]
    };
  }

  // if (action.type === 'CREATE_TOURNAMENT_SUCCESS') {
  //   state.data.unshift(action.payload);
  //   return {
  //     ...state
  //   };
  // }

  if (action.type === 'CREATE_TOURNAMENT_FAILED') {
    return {
      ...state,
      error: action.payload
    };
  }

  if (action.type === 'SEARCH_TOURNAMENTS_REQUEST') {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === 'SEARCH_TOURNAMENTS_SUCCESS') {
    const { data, query } = action.payload;
    const filteredData = data.filter(t =>
      t.name.toLowerCase().includes(query.toLowerCase())
    );
    return {
      ...state,
      loading: false,
      data: filteredData
    };
  }

  if (action.type === 'SEARCH_TOURNAMENTS_FAILED') {
    return {
      ...state,
      error: action.payload,
      loading: false
    };
  }

  return state;
}

// fetch
// loading
// success
// fail
