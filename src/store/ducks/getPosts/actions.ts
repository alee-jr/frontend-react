import { createAsyncAction } from 'typesafe-actions';
import { ResponseGetPosts, GetPostsTypes, RequestGetPosts } from './types';

// Create the set of async actions
export const getPosts = createAsyncAction(
  GetPostsTypes.LOAD_REQUEST,
  GetPostsTypes.LOAD_SUCCESS,
  GetPostsTypes.LOAD_FAILURE,
)<undefined | RequestGetPosts, ResponseGetPosts, Error>();
