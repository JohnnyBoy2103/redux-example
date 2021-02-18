import api from '../services/api'

export const Types = {
  GET_PERSON_REQUEST: 'starWars/GET_PERSON_REQUEST',
  GET_PERSON_SUCCESS: 'starWars/GET_PERSON_SUCCESS',
  GET_PERSON_FAILURE: 'starWars/GET_PERSON_FAILURE',
  CLEAR: 'starWars/CLEAR'
}

const INITIAL_STATE = {
  person: {},
  loading: null,
  successful: null,
  error: null
}

export default function listPersonData (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_PERSON_REQUEST:
      return { ...state, loading: true }
    case Types.GET_PERSON_SUCCESS:
      return { ...state, loading: false, successful: true, error: false, person: action.payload }
    case Types.GET_PERSON_FAILURE:
      return { ...state, loading: false, error: true, successful: false }
    case Types.CLEAR:
      return { ...state, ...INITIAL_STATE }
    default:
      return state
  }
}

export const Creators = {
  getPerson: id => {
    return dispatch => {
      dispatch({
        type: Types.GET_PERSON_REQUEST
      })
      api.get(`people/${id}`)
        .then(response => {
          dispatch({
            type: Types.GET_PERSON_SUCCESS,
            payload: response.data
          })
        })
        .catch(error => {
          console.log(error.message)
          dispatch({
            type: Types.GET_PERSON_FAILURE,
          })
        })
    }
  },
  clear: () => {
    return dispatch => {
      dispatch({
        type: Types.CLEAR
      })
    }
  }
}
