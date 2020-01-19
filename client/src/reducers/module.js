import { 
  GET_PROFILES, 
  PROFILE_ERROR,
  DELETE_PROFILE
} from "../actions/types";

const initialState = {
  profiles: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DELETE_PROFILE:
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
