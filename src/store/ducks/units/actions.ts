/* eslint-disable import/no-cycle */
import { action } from 'typesafe-actions';
import { IUnitsRaw, UnitsActionTypes } from './types';

export const fetchUnitsAction = () =>
  action(UnitsActionTypes.FETCH_UNITS, [], {
    method: 'get',
    route: '/units',
  });
export const fetchUnitsSuccess = (data: IUnitsRaw[]) =>
  action(UnitsActionTypes.FETCH_UNITS_SUCCESS, data);
export const fetchUnitsError = (message: string) =>
  action(UnitsActionTypes.FETCH_UNITS_ERROR, message);

export const changeSelectedUnitID = (id?: number) =>
  action(UnitsActionTypes.CHANGE_SELECTED_UNIT_ID, id);

