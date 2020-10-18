/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import {
  Action,
  MetaAction,
  PayloadAction,
  TypeConstant,
} from 'typesafe-actions';
import { unitsReducer } from './units/reducers';
import unitsSaga from './units/sagas';
import { IUnitsState } from './units/types';
import { filtersReducer } from './filters/reducers';
import filtersSaga from './filters/sagas';
import { IFiltersState } from './filters/types';

interface IMeta {
  method: string;
  route: string;
}

export interface IApplicationState {
  units: IUnitsState;
  filters: IFiltersState;
}

export interface IMetaAction extends MetaAction<TypeConstant, IMeta> {}

export interface IReducerAction<TPayload>
  extends Action<TypeConstant>,
  PayloadAction<TypeConstant, TPayload> {}

export const rootReducer = combineReducers<IApplicationState>({
  units: unitsReducer,
  filters: filtersReducer,
});

export function* rootSaga() {
  yield all([fork(unitsSaga), fork(filtersSaga)]);
}
