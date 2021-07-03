import { GetPostsState } from './ducks/getPosts/types';

export interface ApplicationState {
  getPosts: GetPostsState;
}

declare module 'react-redux' {
  interface DefaultRootState extends ApplicationState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [name: string]: any;
  }
}
