/* eslint-disable import/no-cycle */
import { all, fork, put, takeLatest, select } from 'redux-saga/effects';
import { filterData } from './actions';
import { FiltersActionTypes } from './types';

/**
 * @desc Business logic of effect.
 */
function* filtering(): Generator {
  const costFiltersSelector = (state: any) => state.filters.costFilters;
  const costFilters = yield select(costFiltersSelector);

  // @ts-ignore
  yield put(filterData(costFilters));
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFilters(): Generator {
  yield takeLatest(FiltersActionTypes.CHANGE_COST_FILTER, filtering);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* filtersSaga() {
  yield all([fork(watchFilters)]);
}
