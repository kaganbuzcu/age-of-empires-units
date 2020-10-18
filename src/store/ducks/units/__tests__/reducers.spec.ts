import { fetchUnitsAction, fetchUnitsSuccess } from '../actions';
import { initialState, unitsReducer } from '../reducers';
import * as unitsData from './__mockData__/unitsData.json';

describe('unit reducer', () => {
  it('should return initial state', () => {
    expect(
      // @ts-ignore
      unitsReducer(initialState, { type: 'no type', payload: null }),
    ).toEqual(initialState);
  });
  it('should handle fetching all units', () => {
    // @ts-ignore
    expect(unitsReducer(initialState, fetchUnitsAction())).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('should handle all data successfully fetch unit', () => {
    // @ts-ignore
    expect(unitsReducer(initialState, fetchUnitsSuccess(unitsData))).toEqual({
      ...initialState,
      data: unitsData,
    });
  });
});
