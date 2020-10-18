/* eslint-disable import/no-cycle */
import { Action, PayloadAction, TypeConstant } from 'typesafe-actions';
import {
  IFiltersState,
  ICostFiltersRaw,
  IAgeFiltersRaw,
  FiltersActionTypes,
} from './types';

export const initialState: IFiltersState = {
  costFilters: [
    { key: 'Food', checked: false, rangeValue: '20' },
    { key: 'Wood', checked: false, rangeValue: '20' },
    { key: 'Gold', checked: false, rangeValue: '20' },
  ],
  ageFilters: {
    active: 'All',
  },
};

export const filtersReducer = (
  state: IFiltersState = initialState,
  action: Action<TypeConstant> &
  PayloadAction<TypeConstant, ICostFiltersRaw & IAgeFiltersRaw>,
): IFiltersState => {
  switch (action.type) {
    case FiltersActionTypes.CHANGE_COST_FILTER: {
      return {
        ...state,
        costFilters: state.costFilters.map((costFilter) =>
          costFilter.key === action.payload.key
            ? {
              ...costFilter,
              checked: action.payload.checked,
              rangeValue: action.payload.rangeValue,
            }
            : costFilter,
        ),
      };
    }
    case FiltersActionTypes.CHANGE_AGE_FILTER: {
      return {
        ...state,
        ageFilters: {
          ...state.ageFilters,
          active: action.payload.active,
        },
      };
    }
    default:
      return state;
  }
};
