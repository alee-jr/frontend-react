/**
 * Action types
 */

export enum GetPostsTypes {
  LOAD_REQUEST = '@getPosts/LOAD_REQUEST',
  LOAD_SUCCESS = '@getPosts/LOAD_SUCCESS',
  LOAD_FAILURE = '@getPosts/LOAD_FAILURE',
}

/**
 * Data types
 */

export interface RequestGetPosts {
  page: number;
}

export interface PostsDataState {
  id: number;
  user_id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}

export interface ResponseGetPosts {
  err: boolean;
  msg: 'Sucesso' | 'Não autorizado';
  data: PostsDataState[];
  total: number;
  current_page: number;
}

/**
 * State type
 */
export interface GetPostsState {
  readonly current_page: number;
  readonly total: number;
  readonly data?: PostsDataState[];
  readonly loaded: boolean;
  readonly loading: boolean;
  readonly error: boolean;
}
