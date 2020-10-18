export interface ICostFiltersRaw {
  key: string;
  checked: boolean;
  rangeValue: string;
}

export interface IAgeFiltersRaw {
  active: string;
}

export interface IFiltersState {
  costFilters: ICostFiltersRaw[];
  ageFilters: IAgeFiltersRaw;
}

export const FiltersActionTypes = {
  CHANGE_COST_FILTER: '@@filters/CHANGE_COST_FILTER',
  CHANGE_AGE_FILTER: '@@filters/CHANGE_AGE_FILTER',
  FILTER_DATA: '@@units/FILTER_DATA',
};

export interface IDispatchToProps {
  changeCostFiltersAction: Function;
  changeAgeFiltersAction: Function;
}
