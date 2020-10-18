/* eslint-disable import/no-cycle */
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { IMetaAction } from '..';
import apiCaller from '../../utils/apiCaller';
import { fetchUnitsError, fetchUnitsSuccess } from './actions';
import { IUnitsRaw, UnitsActionTypes } from './types';

/**
 * @desc Business logic of effect.
 */
function* handleFetch(action: IMetaAction): Generator {
  try {
    const res: IUnitsRaw[] | any = yield call(
      apiCaller,
      action.meta.method,
      action.meta.route,
    );

    yield put(fetchUnitsSuccess(res.units));
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchUnitsError(err.stack!));
    } else {
      yield put(fetchUnitsError('An unknown error occured.'));
    }
  }
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest(): Generator {
  yield takeEvery(UnitsActionTypes.FETCH_UNITS, handleFetch);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* unitsSaga() {
  yield all([fork(watchFetchRequest)]);
}
