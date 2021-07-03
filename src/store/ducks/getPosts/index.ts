import { Reducer } from 'redux';
import { GetPostsState, GetPostsTypes } from './types';

const INITIAL_STATE: GetPostsState = {
  loaded: false,
  loading: false,
  error: false,
  total: 1,
  current_page: 1,
};

const reducer: Reducer<GetPostsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GetPostsTypes.LOAD_REQUEST:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case GetPostsTypes.LOAD_SUCCESS: {
      return {
        ...INITIAL_STATE,
        loaded: true,
        data: action.payload.data,
        meta: action.payload.meta,
        total: action.payload.meta.pagination.pages || 1,
        current_page: action.payload.meta.pagination.page || 1,
      };
    }
    case GetPostsTypes.LOAD_FAILURE:
      return {
        ...INITIAL_STATE,
        loaded: true,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
