// eslint-disable-next-line import/no-cycle
import { IMetaAction } from '..';

export type ApiResponse = Record<string, any>;

export interface IUnitsRaw extends ApiResponse {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  cost: {
    Food?: number;
    Wood?: number;
    Gold?: number;
  };
  build_time: number;
  reload_time: number;
  attack_delay: number;
  movement_rate: number;
  line_of_sight: number;
  hit_points: number;
  range: number;
  attack: number;
  armor: string;
  attack_bonus: string[];
  blast_radius:number
  accuracy: string;
}

export interface IUnitsState {
  readonly data: IUnitsRaw[];
  filteredData: IUnitsRaw[];
  selectedUnitID: number;
  readonly loading: boolean;
  readonly errors: [];
}

export const UnitsActionTypes = {
  FETCH_UNITS: '@@units/FETCH_UNITS',
  FETCH_UNITS_SUCCESS: '@@units/FETCH_UNITS_SUCCESS',
  FETCH_UNITS_ERROR: '@@units/FETCH_UNITS_ERROR',
  CHANGE_SELECTED_UNIT_ID: '@@units/CHANGE_SELECTED_UNIT_ID',
};

export interface IDispatchToProps {
  fetchUnitsAction: () => IMetaAction;
}
