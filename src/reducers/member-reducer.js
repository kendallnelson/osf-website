import {
  GET_MEMBERS,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_ERROR,
  GET_MEMBER_PROFILE_SUCCESS,
  GET_ELECTION_MEMBER_PROFILE,
  GET_ELECTION_MEMBER_PROFILE_SUCCESS,
  GET_ELECTION_MEMBER_PROFILE_ERROR,
} from '../actions/member-actions'

const DEFAULT_STATE = {
  members_list: [],
  current_page: null,
  last_page: null,
  loading_members: false,
  member_profile: null
}

const memberReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action

  switch (type) {

    case GET_MEMBERS: {
      return { ...state, loading_members: true }
    }
      break;
    case GET_MEMBERS_SUCCESS: {
      const { data, current_page, last_page } = payload.response;
      return { ...state, members_list: data, current_page, last_page, loading_members: false }
    }
      break;
    case GET_MEMBERS_ERROR: {
      return { ...state, loading_members: false }
    }
      break;
    case GET_MEMBER_PROFILE_SUCCESS: {
      return { ...state, member_profile: payload.response }
    }
    case GET_ELECTION_MEMBER_PROFILE: {
      return { ...state, loading_members: true, }
    }
    case GET_ELECTION_MEMBER_PROFILE_SUCCESS: {
      return { ...state, member_profile: { ...state.member_profile, ...payload.response }, loading_members: false, }
    }
    case GET_ELECTION_MEMBER_PROFILE_ERROR: {
      return { ...state, loading_members: false, }
    }
    default:
      return state;
  }
}

export default memberReducer