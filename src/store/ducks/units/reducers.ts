/* eslint-disable import/no-cycle */
import * as _ from 'lodash';
import { Action, PayloadAction, TypeConstant } from 'typesafe-actions';
import { IUnitsRaw, IUnitsState, UnitsActionTypes } from './types';
import { FiltersActionTypes } from '../filters/types';

export const initialState: IUnitsState = {
  data: [],
  filteredData: [],
  selectedUnitID: 0,
  errors: [],
  loading: false,
};
export const unitsReducer = (
  state: IUnitsState = initialState,
  action: Action<TypeConstant> &
  PayloadAction<TypeConstant, IUnitsRaw[] & number & { [key: string]: number }>,
): IUnitsState => {
  switch (action.type) {
    case UnitsActionTypes.FETCH_UNITS: {
      return { ...state, loading: true };
    }
    case UnitsActionTypes.FETCH_UNITS_SUCCESS: {
      return {
        ...initialState,
        data: action.payload,
        filteredData: action.payload.slice(),
      };
    }
    case UnitsActionTypes.FETCH_UNITS_ERROR: {
      return {
        ...state,
      };
    }
    case UnitsActionTypes.CHANGE_SELECTED_UNIT_ID: {
      return {
        ...state,
        selectedUnitID: action.payload
      };
    }
    case FiltersActionTypes.FILTER_DATA: {
      const costFiltered: IUnitsRaw[] = [];
      const costList: { [key: string]: number } = action.payload;
      if (Object.keys(costList).length > 0) {
        // eslint-disable-next-line array-callback-return
        state.data.filter((unit) => {
          if (unit.cost) {
            const map = _.map(unit.cost, (value, costName) => ({
              value,
              costName,
            }));

            map.forEach((item) => {
              // eslint-disable-next-line radix
              if (item.value === costList[item.costName]) {
                costFiltered.push(unit);
              }
            });
          }
        });

        return { ...state, filteredData: costFiltered };
      }
      return { ...state, filteredData: state.data };
    }
    default:
      return state;
  }
};
