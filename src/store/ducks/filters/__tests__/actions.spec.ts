import { action } from 'typesafe-actions';
import { changeCostFiltersAction } from '../actions';
import { FiltersActionTypes } from '../types';

describe('filters actions', () => {
  const expectedAction = action(FiltersActionTypes.CHANGE_COST_FILTER, {
    key: 'Food',
    checked: false,
    rangeValue: '20',
  });
  expect(
    changeCostFiltersAction({ key: 'Food', checked: false, rangeValue: '20' }),
  ).toEqual(expectedAction);
});
