/* eslint-disable import/no-cycle */
import { action } from 'typesafe-actions';
import { ICostFiltersRaw, IAgeFiltersRaw, FiltersActionTypes } from './types';

export const changeCostFiltersAction = (payload?: ICostFiltersRaw) =>
  action(FiltersActionTypes.CHANGE_COST_FILTER, payload);

export const changeAgeFiltersAction = (payload?: IAgeFiltersRaw) =>
  action(FiltersActionTypes.CHANGE_AGE_FILTER, payload);

export const filterData = (costFilters: ICostFiltersRaw[]) => {
  const costList: { [key: string]: number } = {};
  costFilters.forEach((cost: ICostFiltersRaw) => {
    if (cost.checked) {
      // eslint-disable-next-line radix
      costList[cost.key] = parseInt(cost.rangeValue);
    }
  });

  return action(FiltersActionTypes.FILTER_DATA, costList);
};
