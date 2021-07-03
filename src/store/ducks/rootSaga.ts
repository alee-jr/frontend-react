import { all, takeEvery } from 'redux-saga/effects';
import { GetPostsTypes } from './getPosts/types';
import { load as getPostsLoad } from './getPosts/saga';

export default function* rootSaga(): any {
  return yield all([takeEvery(GetPostsTypes.LOAD_REQUEST, getPostsLoad)]);
}
