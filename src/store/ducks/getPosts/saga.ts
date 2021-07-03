/* eslint-disable no-nested-ternary */
import { call, put } from 'redux-saga/effects';
import { getPosts } from './actions';
// import { ProxyRequest } from '../../../services/proxy';
import { ResponseGetPosts } from './types';
import RequisicaoApi from '../../../services/api';

export function* load({ payload }: ReturnType<typeof getPosts.request>): Generator {
  try {
    const data: any = yield call(RequisicaoApi, {
      metodo: 'GET',
      path: `/posts${payload ? `?page=${payload.page}` : ''}`,
    });

    if (data.erro) yield put(getPosts.failure(data.mensagem));
    else {
      yield put(getPosts.success(data as ResponseGetPosts));
    }
  } catch (error) {
    yield put(getPosts.failure(error));
  }
}
