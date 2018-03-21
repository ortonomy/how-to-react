// initial state
const initialState = {
}

export default function appReducer(state = initialState, action) {
  switch( action.type ) {
    case 'GET_MOVIES': {
      return {
        ...state,
        loading: true
      }
    }
    case 'GET_MOVIES_SUCCESS': {
      return {
        ...state,
        loaded: true,
        loading: false,
        movies: action.payload.movies,
        imageUrl: action.payload.imageUrl,
        error: false
      }
    }
    case 'GET_MOVIES_FAIL': {
      return {
        ...state,
        loaded: false,
        loading: false,
        error: true
      }
    }
    default: {
      return state
    }
  }
}