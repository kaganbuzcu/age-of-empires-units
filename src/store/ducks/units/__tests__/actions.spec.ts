import { action } from 'typesafe-actions';
import { fetchUnitsAction, fetchUnitsSuccess } from '../actions';
import { UnitsActionTypes } from '../types';
import * as unitsData from './__mockData__/unitsData.json';

describe('post actions', () => {
  it('should create an action to fetch all units', () => {
    const expectedAction = action(UnitsActionTypes.FETCH_UNITS, [], {
      method: 'get',
      route: '/units',
    });

    expect(fetchUnitsAction()).toEqual(expectedAction);
  });

  it('should create an success action', () => {
    const expectedAction = action(
      UnitsActionTypes.FETCH_UNITS_SUCCESS,
      unitsData,
    );
    // @ts-ignore
    expect(fetchUnitsSuccess(unitsData)).toEqual(expectedAction);
  });
});
